const AWS = require('aws-sdk');
const ses = new AWS.SES({ apiVersion: '2010-12-01' });

exports.handler = async (event) => {

    console.log('EVENT INFO:', event);

    const done = function (code, message) {
        let response = {
            "statusCode": code,
            "body": JSON.stringify(message)
        };
        return response;
    };

    const mail = JSON.parse(event.body);

    //TODO: Validate service quota limits
    //Max recipient is any "To", "CC", or "BCC" address: 50

    //TODO: Add validation for a bulk message
    //Refactor: Create a function to group recipients in dependency of bulk property
    //Bulk: true = Send messages in groups of 50 or less - This case if not needed granular info
    //Bulk: false = Send messages one by one - This case if for manage campaigns when it need a granular event info like: Send, receibe, bound, open, click, etc

    if (mail.template) {
        try {
            let template = require(`./templates/${mail.template}`);

            //THIS LINE HAS BEEN ADDED BECAUSE THE DINAMIC IMPORT IS NOT WORKING WHEN NCC IS USED
            if(!template) return done(404, { message: 'Template not found' });

            mail.html = template.generateHtml(mail.data);
            mail.text = template.generateText(mail.data);
        } catch (error) {
            console.error('ERROR:', error);
            if (error.code === 'MODULE_NOT_FOUND') {
                return done(404, { message: 'Template not found' });
            } else {
                return done(500, error.message);
            }
        }
    }

    let params = {
        Destination: {
            BccAddresses: mail.bcc || [],
            CcAddresses: mail.cc || [],
            ToAddresses: mail.to || []
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: mail.html || ''
                },
                Text: {
                    Charset: "UTF-8",
                    Data: mail.text || ''
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: mail.subject
            }
        },
        ReplyToAddresses: mail.replyTo || [],
        Source: typeof mail.from == 'string' ? mail.from : mail.from.name + ' ' + '<' + mail.from.email + '>',
        // ConfigurationSetName: mail.configset || 'track-all-events',
        Tags: mail.tags || []
    };

    //Validate if the request has configuration set
    if(mail.configset){
        params.ConfigurationSetName = mail.configset
    }

    try {
        const send = await ses.sendEmail(params).promise();
        console.info('SUCCESS:', send);
        return done(200, send);
    } catch (error) {
        console.error('ERROR:', error);
        return done(500, error);
    }
};