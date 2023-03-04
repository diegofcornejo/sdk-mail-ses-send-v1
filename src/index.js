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

    if (mail.template) {
        // let modulePath = `./templates/${mail.template}.js`;
        try {
            let template = require(`./templates/${mail.template}`);
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
        // ReturnPath: "",
        // ReturnPathArn: "",
        Source: typeof mail.from == 'string' ? mail.from : mail.from.name + ' ' + '<' + mail.from.email + '>',
        // SourceArn: ""
    };

    try {
        const send = await ses.sendEmail(params).promise();
        console.info('SUCCESS:', send);
        return done(200, send);
    } catch (error) {
        console.error('ERROR:', error);
        return done(500, error);
    }
};