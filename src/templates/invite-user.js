const generateHtml = (data) => {

    let template = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
      <div id="__react-email-preview" style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">${data.preview}<div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿</div>
      </div>
      <body style="background-color:#ffffff;margin:0 auto;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif">
        <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%" style="max-width:37.5em;border:1px solid #eaeaea;border-radius:5px;margin:40px auto;padding:20px;width:465px">
          <tr style="width:100%">
            <td>
              <table style="margin-top:32px" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                <tbody>
                  <tr>
                    <td><img alt="Vercel" src="https://react-email-demo-92trk6dwg-resend.vercel.app/static/vercel-logo.png" width="40" height="37" style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto" /></td>
                  </tr>
                </tbody>
              </table>
              <h1 style="color:#000;font-size:24px;font-weight:normal;text-align:center;margin:30px 0;padding:0">Join <strong>My Project</strong> on <strong>Vercel</strong></h1>
              <p style="font-size:14px;line-height:24px;margin:16px 0;color:#000">${data.greeting},</p>
              <p style="font-size:14px;line-height:24px;margin:16px 0;color:#000"><strong>bukinoshita</strong> (<a target="_blank" style="color:#067df7;text-decoration:none" href="mailto:bukinoshita@example.com">bukinoshita@example.com</a>) has invited you to the <strong>My Project</strong> team on <strong>Vercel</strong>.</p>
              <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                <tbody>
                  <tr>
                    <td>
                      <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%">
                        <tbody style="width:100%">
                          <tr style="width:100%">
                            <td align="right"><img src="${data.image}" width="64" height="64" style="display:block;outline:none;border:none;text-decoration:none;border-radius:100%" /></td>
                            <td align="center"><img alt="invited you to" src="https://react-email-demo-92trk6dwg-resend.vercel.app/static/vercel-arrow.png" width="12" height="9" style="display:block;outline:none;border:none;text-decoration:none" /></td>
                            <td align="left"><img src="https://react-email-demo-92trk6dwg-resend.vercel.app/static/vercel-team.png" width="64" height="64" style="display:block;outline:none;border:none;text-decoration:none;border-radius:100%" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table style="text-align:center;margin-top:26px;margin-bottom:26px" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                <tbody>
                  <tr>
                    <td><a href="${data.link}" target="_blank" style="background-color:#000;border-radius:5px;color:#fff;font-size:12px;font-weight:500;line-height:100%;text-decoration:none;text-align:center;p-x:20px;p-y:12px;display:inline-block;max-width:100%;padding:12px 20px"><span><!--[if mso]><i style="letter-spacing: 20px;mso-font-width:-100%;mso-text-raise:18" hidden>&nbsp;</i><![endif]--></span><span style="background-color:#000;border-radius:5px;color:#fff;font-size:12px;font-weight:500;line-height:120%;text-decoration:none;text-align:center;p-x:20px;p-y:12px;max-width:100%;display:inline-block;text-transform:none;mso-padding-alt:0px;mso-text-raise:9px">Join the team</span><span><!--[if mso]><i style="letter-spacing: 20px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></span></a></td>
                  </tr>
                </tbody>
              </table>
              <p style="font-size:14px;line-height:24px;margin:16px 0;color:#000">or copy and paste this URL into your browser: <a target="_blank" style="color:#067df7;text-decoration:none" href="${data.link}" rel="noreferrer">${data.link}</a></p>
              <hr style="width:100%;border:none;border-top:1px solid #eaeaea;margin:26px 0" />
              <p style="font-size:12px;line-height:24px;margin:16px 0;color:#666666">This invitation was intended for <span style="color:black">zenorocha </span>.This invite was sent from <span style="color:black">204.13.186.218</span> located in <span style="color:black">São Paulo, Brazil</span>. If you were not expecting this invitation, you can ignore this email. If you are concerned about your account&#x27;s safety, please reply to this email to get in touch with us.</p>
            </td>
          </tr>
        </table>
      </body>
    </html>`;

    return template;
};

const generateText = (data) => {

    let template = `JOIN MY PROJECT ON VERCEL

    ${data.greeting},
    
    bukinoshita (bukinoshita@example.com [bukinoshita@example.com]) has invited you
    to the My Project team on Vercel.
    
    
    
    Join the team [${data.link}]
    
    or copy and paste this URL into your browser:
    ${data.link} [${data.link}]
    
    --------------------------------------------------------------------------------
    
    This invitation was intended for zenorocha .This invite was sent from
    204.13.186.218 located in São Paulo, Brazil. If you were not expecting this
    invitation, you can ignore this email. If you are concerned about your account's
    safety, please reply to this email to get in touch with us.`;

    return template;
}

module.exports = {
    generateHtml,
    generateText
};