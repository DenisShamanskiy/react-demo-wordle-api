const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: "Подтвердите свою учетную запись на Wordle by DS",
      text: "",
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
      <html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Подтвердите свою учетную запись на Wordle by DS</title>
          <style type="text/css">
            html {
              -webkit-text-size-adjust: none;
              -ms-text-size-adjust: none;
            }
            @media only screen and (max-device-width: 660px),
              only screen and (max-width: 660px) {
              .em-mobile {
                display: table-row !important;
              }
              .em-desktop {
                display: none !important;
              }
              .em-mobile-table-center {
                margin-left: auto !important;
                margin-right: auto !important;
              }
              .em-mobile-height-auto {
                height: auto !important;
              }
              .em-mobile-radius-top-7 {
                border-radius: 7px 7px 0 0 !important;
              }
              .em-mobile-article-1 {
                border-top: none !important;
                border-right: 1px solid silver !important;
                border-left: 1px solid silver !important;
                border-radius: 0 0 7px 7px !important;
              }
              .em-mobile-text-left {
                text-align: left !important;
              }
              .em-mobile-width-100 {
                width: 100% !important;
                max-width: 100% !important;
              }
              .em-mobile-text-center {
                text-align: center !important;
              }
              .em-mobile-fontsize-14 {
                font-size: 14px !important;
                line-height: 20px !important;
              }
              .em-mobile-width-91 {
                width: 91% !important;
                max-width: 91% !important;
              }
            }
          </style>
          <style em="styles"></style>
        </head>
        <body style="margin: 0; padding: 0">
          <span
            class="preheader"
            style="
              display: none !important;
              visibility: hidden;
              opacity: 0;
              color: #f8f8f8;
              height: 0;
              width: 0;
              font-size: 1px;
            "
            >Добро пожаловать в Wordle by DS.‌</span
          >
          <!--[if !mso]><!-->
          <div style="font-size: 0px; color: transparent; opacity: 0"></div>
          <!--<![endif]-->
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            width="100%"
            style="font-size: 1px; line-height: normal"
          >
            <tr em="group">
              <td align="center" bgcolor="#F2F3F4">
                <!--[if (gte mso 9)|(IE)]>
                    <table cellpadding="0" cellspacing="0" border="0" width="800"><tr><td>
                    <![endif]-->
                <table
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  border="0"
                  style="max-width: 800px; min-width: 320px; width: 100%"
                >
                  <tr em="block">
                    <td align="center">
                      <!--[if (gte mso 9)|(IE)]>
                          <table cellpadding="0" cellspacing="0" border="0" width="660"><tr><td>
                          <![endif]-->
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                        style="max-width: 660px"
                      >
                        <tr>
                          <td align="center" valign="middle" bgcolor="#F2F3F4">
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              border="0"
                              width="100%"
                            >
                              <tr>
                                <td height="20"></td>
                              </tr>
                            </table>
                            <div
                              style="
                                display: inline-block;
                                width: 260px;
                                vertical-align: middle;
                              "
                            >
                              <table
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tr>
                                  <td align="left" class="em-mobile-text-center">
                                    <a href="" target="_blank">
                                      <span class="em-element-resize-img-container">
                                        <span class="em-element-resize-img-container">
                                          <span
                                            class="em-element-resize-img-container"
                                            ><span
                                              class="em-element-resize-img-container"
                                              ><img
                                                src="https://lh3.googleusercontent.com/Kg-HSZokEe0Wcjx-2QpFFHA4cS5EIyQAsE_GoBCPbIBC8zVG0qcTAJKfdK8SauLQsHQ=w2400"
                                                width="120"
                                                border="0"
                                                alt="Логотип Wordle by DS"
                                                style="
                                                  display: inline-block;
                                                  width: 100%;
                                                  max-width: 120px;
                                                " /></span
                                          ></span>
                                        </span>
                                      </span>
                                    </a>
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      border="0"
                                      width="100%"
                                    >
                                      <tr>
                                        <td height="20"></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </div>
                            <div
                              style="
                                display: inline-block;
                                width: 340px;
                                vertical-align: middle;
                              "
                              class="em-mobile-width-91"
                            >
                              <table
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tr>
                                  <td align="right">
                                    <table
                                      align="center"
                                      width="100%"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                    >
                                      <tr>
                                        <td width="15" em="atom">&nbsp;</td>
                                        <td width="15" em="atom">&nbsp;</td>
                                        <td width="15" em="atom">&nbsp;</td>
                                      </tr>
                                    </table>
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      border="0"
                                      width="100%"
                                    >
                                      <tr>
                                        <td height="20"></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                          </td></tr></table>
                          <![endif]-->
                    </td>
                  </tr>
                  <tr em="block">
                    <td align="center">
                      <!--[if (gte mso 9)|(IE)]>
                          <table cellpadding="0" cellspacing="0" border="0" width="660"><tr><td>
                          <![endif]-->
                      <table
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        width="100%"
                        style="max-width: 660px"
                      >
                        <tr>
                          <td align="center" bgcolor="#F2F3F4">
                            <table
                              align="center"
                              cellpadding="0"
                              cellspacing="0"
                              border="0"
                              width="91%"
                            >
                              <tr>
                                <td align="left">
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="100%"
                                  >
                                    <tr>
                                      <td height="20"></td>
                                    </tr>
                                  </table>
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="100%"
                                  >
                                    <tr></tr>
                                  </table>
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="100%"
                                  >
                                    <tr></tr>
                                  </table>
                                  <div
                                    style="
                                      font-family: -apple-system, 'Segoe UI',
                                        'Helvetica Neue', Helvetica, Roboto, Arial,
                                        sans-serif;
                                      font-size: 16px;
                                      line-height: 24px;
                                      color: #49474e;
                                    "
                                  >
                                    Спасибо, что зарегистрировались
                                    в <strong>Wordle by DS</strong>. Нажмите на кнопку ниже,
                                    чтобы подтвердить адрес вашей электронной почты.
                                  </div>
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="100%"
                                  >
                                    <tr>
                                      <td height="20"></td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                          </td></tr></table>
                          <![endif]-->
                    </td>
                  </tr>
                  <tr em="block">
                    <td align="center">
                      <!--[if (gte mso 9)|(IE)]>
                          <table cellpadding="0" cellspacing="0" border="0" width="660"><tr><td>
                          <![endif]-->
                      <table
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        width="100%"
                        style="max-width: 660px"
                      >
                        <tr>
                          <td align="center" bgcolor="#F2F3F4">
                            <table
                              align="center"
                              cellpadding="0"
                              cellspacing="0"
                              border="0"
                              width="91%"
                            >
                              <tr>
                                <td align="center" valign="middle">
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="100%"
                                  >
                                    <tr>
                                      <td height="20"></td>
                                    </tr>
                                  </table>
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="192"
                                    style="width: 192px"
                                  >
                                    <tr>
                                      <td
                                        align="center"
                                        valign="middle"
                                        height="48"
                                        style="
                                          background-color: #6aaa64;
                                          border-radius: 4px;
                                          height: 48px;
                                          border: none;
                                        "
                                      >
                                        <a
                                          href="${link}"
                                          target="_blank"
                                          style="
                                            display: block;
                                            width: 100%;
                                            height: 48px;
                                            font-family: font-family-4remove-0,
                                              -apple-system, Segoe UI, Helvetica Neue,
                                              Helvetica, Roboto, Arial, sans-serif;
                                            color: #f2f3f4;
                                            font-size: 18px;
                                            font-weight: 500;
                                            line-height: 48px;
                                            text-decoration: none;
                                            white-space: nowrap;
                                          "
                                        >
                                          Подтвердить
                                        </a>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="100%"
                                  >
                                    <tr>
                                      <td height="20"></td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                          </td></tr></table>
                          <![endif]-->
                    </td>
                  </tr>
                  <tr em="block" class="empty-structure">
                    <td align="center">
                      <!--[if (gte mso 9)|(IE)]>
                <table cellpadding="0" cellspacing="0" border="0" width="660"><tr><td>
                <![endif]-->
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                        style="max-width: 660px"
                      >
                        <tr>
                          <td align="center" valign="top">
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              border="0"
                              width="100%"
                            >
                              <tr>
                                <td height="20"></td>
                              </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]>
                      <table border="0" cellspacing="0" cellpadding="0">
                      <tr><td width="660" valign="top"><![endif]-->
                            <div
                              style="
                                display: inline-block;
                                width: 100%;
                                max-width: 660px;
                                vertical-align: top;
                              "
                              class="em-mobile-width-100"
                            >
                              <table
                                width="602"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                style="width: 91%; max-width: 602px"
                                class="em-mobile-width-91"
                              >
                                <tr>
                                  <td align="left">
                                    <div em="atom">
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                        width="100%"
                                      >
                                        <tr></tr>
                                      </table>
                                      <div
                                        style="
                                          font-family: system-ui, -apple-system,
                                            'Segoe UI', 'Helvetica Neue', Helvetica,
                                            Roboto, Arial, sans-serif;
                                          font-size: 16px;
                                          line-height: 24px;
                                          color: #49474e;
                                        "
                                        align="center"
                                      >
                                        Получайте удовольствие и не стесняйтесь
                                        обращаться со своими отзывами.
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </div>
                            <!--[if (gte mso 9)|(IE)]>
                      </td></tr>
                      </table><![endif]-->
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              border="0"
                              width="100%"
                            >
                              <tr></tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                </td></tr></table>
                <![endif]-->
                    </td>
                  </tr>
                  <tr em="block" class="empty-structure">
                    <td align="center">
                      <!--[if (gte mso 9)|(IE)]>
                <table cellpadding="0" cellspacing="0" border="0" width="660"><tr><td>
                <![endif]-->
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                        style="max-width: 660px"
                      >
                        <tr>
                          <td align="center" valign="top">
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              border="0"
                              width="100%"
                            >
                              <tr>
                                <td height="30"></td>
                              </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]>
                      <table border="0" cellspacing="0" cellpadding="0">
                      <tr><td width="660" valign="top"><![endif]-->
                            <div
                              style="
                                display: inline-block;
                                width: 100%;
                                max-width: 660px;
                                vertical-align: top;
                              "
                              class="em-mobile-width-100"
                            >
                              <table
                                width="602"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                style="width: 91%; max-width: 602px"
                                class="em-mobile-width-91"
                              >
                                <tr>
                                  <td align="left">
                                    <div em="atom">
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                        width="100%"
                                      >
                                        <tr></tr>
                                      </table>
                                      <div
                                        style="
                                          font-family: system-ui, -apple-system,
                                            'Segoe UI', 'Helvetica Neue', Helvetica,
                                            Roboto, Arial, sans-serif;
                                          font-size: 16px;
                                          line-height: 24px;
                                          color: #49474e;
                                        "
                                        align="center"
                                      >
                                        Денис Шаманский &nbsp;
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                width="100%"
                              >
                                <tr>
                                  <td height="10"></td>
                                </tr>
                              </table>
                            </div>
                            <!--[if (gte mso 9)|(IE)]>
                      </td></tr>
                      </table><![endif]-->
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              border="0"
                              width="100%"
                            >
                              <tr></tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                </td></tr></table>
                <![endif]-->
                    </td>
                  </tr>
                  <tr em="block" class="empty-structure">
                    <td align="center">
                      <!--[if (gte mso 9)|(IE)]>
                <table cellpadding="0" cellspacing="0" border="0" width="660"><tr><td>
                <![endif]-->
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                        style="max-width: 660px"
                      >
                        <tr>
                          <td align="center" valign="top">
                            <div
                              style="
                                display: inline-block;
                                width: 572px;
                                vertical-align: top;
                              "
                              class="em-mobile-width-100"
                            >
                              <table
                                width="552"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                class="em-mobile-width-91"
                              >
                                <tr>
                                  <td
                                    align="center"
                                    width="30"
                                    height="30"
                                    style="height: 30px"
                                  >
                                    <table
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      em="atom"
                                    >
                                      <tr>
                                        <td>
                                          <a
                                            href="https://t.me/Denis_Shamanskiy"
                                            target="_blank"
                                            ><img
                                              src="https://imgems.ru/emailmaker/techsalerlight/tg-2.png"
                                              width="30"
                                              border="0"
                                              alt=""
                                              style="display: block; max-width: 30px"
                                          /></a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                width="100%"
                              >
                                <tr>
                                  <td height="20"></td>
                                </tr>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                </td></tr></table>
                <![endif]-->
                    </td>
                  </tr>
                  <tr em="block" class="empty-structure">
                    <td align="center">
                      <!--[if (gte mso 9)|(IE)]>
                <table cellpadding="0" cellspacing="0" border="0" width="660"><tr><td>
                <![endif]-->
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                        style="max-width: 660px"
                      >
                        <tr>
                          <td align="center" valign="top">
                            <div
                              style="
                                display: inline-block;
                                width: 100%;
                                max-width: 660px;
                                vertical-align: top;
                              "
                              class="em-mobile-width-100"
                            >
                              <table
                                width="602"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                style="width: 91%; max-width: 602px"
                                class="em-mobile-width-91"
                              >
                                <tr>
                                  <td align="left">
                                    <div em="atom">
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                        width="100%"
                                      >
                                        <tr>
                                          <td
                                            height="10"
                                            style="border-top: 1px solid #d9d9d9"
                                          >
                                            &nbsp;
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                </td></tr></table>
                <![endif]-->
                    </td>
                  </tr>
                  <tr em="block" class="empty-structure">
                    <td align="center">
                      <!--[if (gte mso 9)|(IE)]>
                <table cellpadding="0" cellspacing="0" border="0" width="660"><tr><td>
                <![endif]-->
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                        style="max-width: 660px"
                      >
                        <tr>
                          <td align="center" valign="top">
                            <div
                              style="
                                display: inline-block;
                                width: 100%;
                                max-width: 660px;
                                vertical-align: top;
                              "
                              class="em-mobile-width-100"
                            >
                              <table
                                width="602"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                style="width: 91%; max-width: 602px"
                                class="em-mobile-width-91"
                              >
                                <tr>
                                  <td align="left">
                                    <div em="atom">
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                        width="100%"
                                      >
                                        <tr>
                                          <td height="10"></td>
                                        </tr>
                                      </table>
                                      <div
                                        style="
                                          font-family: system-ui, -apple-system,
                                            'Segoe UI', 'Helvetica Neue', Helvetica,
                                            Roboto, Arial, sans-serif;
                                          font-size: 14px;
                                          line-height: 24px;
                                          color: #49474e;
                                        "
                                        align="center"
                                      >
                                        Wordle by DS - это pet-проект. С кодом можно
                                        ознакомиться на&nbsp;<a
                                          href="https://github.com/DenisShamanskiy/react-demo-wordle"
                                          target="_blank"
                                          >github</a
                                        >
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                width="100%"
                              >
                                <tr>
                                  <td height="20"></td>
                                </tr>
                              </table>
                            </div>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              border="0"
                              width="100%"
                            >
                              <tr>
                                <td height="10"></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                </td></tr></table>
                <![endif]-->
                    </td>
                  </tr>
                  <tr em="block">
                    <td align="center">
                      <!--[if (gte mso 9)|(IE)]>
                          <table cellpadding="0" cellspacing="0" border="0" width="660"><tr><td>
                          <![endif]-->
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                        style="max-width: 660px"
                      >
                        <tr>
                          <td align="center" valign="top">
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              border="0"
                              width="100%"
                            >
                              <tr></tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                          </td></tr></table>
                          <![endif]-->
                    </td>
                  </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]>
                    </td></tr></table>
                    <![endif]-->
              </td>
            </tr>
          </table>
        </body>
      </html>`,
    });
  }
}

module.exports = new MailService();
