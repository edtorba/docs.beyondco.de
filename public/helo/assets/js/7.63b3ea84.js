(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{173:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("HELO can be used with any local software that can send emails via SMTP.")]),e._v(" "),s("p",[e._v("If your specific application is not listed, please refer to your application documentation on how to change the SMTP configuration.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._m(5),e._v(" "),e._m(6),e._m(7),e._v(" "),s("p",[e._v("You can install the HELO helper package to display additional debug information, like which view file, view content and view data was used when sending the email.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._m(11),e._v(" "),s("p",[e._v("Symfony uses SwiftMailerBundle to send emails. You can find more information on how to send email on "),s("a",{attrs:{href:"https://symfony.com/doc/current/email.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Symfony's website"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("To get started you need to modify .env file in your project directory and set MAILER_URL value:")]),e._v(" "),e._m(12),e._m(13),e._v(" "),s("p",[e._v("You can configure your WordPress site to send mails to HELO by using "),s("a",{attrs:{href:"http://codex.wordpress.org/Plugin_API/Action_Reference/phpmailer_init",target:"_blank",rel:"noopener noreferrer"}},[e._v("this code"),s("OutboundLink")],1),e._v(":")]),e._v(" "),e._m(14),e._m(15),e._v(" "),s("p",[e._v("You can find documentation for sending emails using SMTP in Yii Framework "),s("a",{attrs:{href:"https://www.yiiframework.com/wiki/656/how-to-send-emails-using-smtp",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("In your config file add:")]),e._v(" "),e._m(16),e._m(17),e._v(" "),s("p",[e._v("Nodemailer is an easy to use module to send e-mails with Node.JS:")]),e._v(" "),e._m(18)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"generic-usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generic-usage"}},[this._v("#")]),this._v(" Generic usage")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you are using Vagrant/Homestead, use "),t("code",[this._v("10.0.2.2")]),this._v(" as your SMTP-Host."),t("br"),this._v("\nFor Docker, use "),t("code",[this._v("host.docker.internal")]),this._v(" as your SMTP-Host.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"ruby-on-rails"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ruby-on-rails"}},[this._v("#")]),this._v(" Ruby on Rails")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In "),t("code",[this._v("config/environments/*.rb")]),this._v(" specify ActionMailer defaults for your development or staging servers:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("config.action_mailer.delivery_method = :smtp\nconfig.action_mailer.smtp_settings = {\n  :user_name => 'Mailbox-Name',\n  :password => '',\n  :address => '127.0.0.1',\n  :domain => '127.0.0.1',\n  :port => ':port:',\n  :authentication => :cram_md5\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"ruby-net-smtp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ruby-net-smtp"}},[this._v("#")]),this._v(" Ruby (net/smtp)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("require 'net/smtp'\n\nmessage = <<-END.split(\"\\n\").map!(&:strip).join(\"\\n\")\nFrom: Private Person <from@127.0.0.1>\nTo: A Test User <to@127.0.0.1>\nSubject: HELO!\n\nThis is a test e-mail message from HELO.\nEND\n\nNet::SMTP.start('127.0.0.1',\n              2525,\n              '127.0.0.1',\n              'Mailbox-Name', '', :cram_md5) do |smtp|\nsmtp.send_message message, 'from@127.0.0.1',\n                           'to@127.0.0.1'\nend\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"laravel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#laravel"}},[this._v("#")]),this._v(" Laravel")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To install the package use: "),t("code",[this._v("composer require beyondcode/laravel-helo")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Use these configuration values in your Laravel applications "),t("code",[this._v(".env")]),this._v(" file, to connect to HELO:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("MAIL_DRIVER=smtp\nMAIL_HOST=127.0.0.1\nMAIL_PORT=:port:\nMAIL_USERNAME=Inbox-Name\nMAIL_PASSWORD=null\nMAIL_ENCRYPTION=null\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"symfony"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symfony"}},[this._v("#")]),this._v(" Symfony")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("MAILER_URL=smtp://127.0.0.1:2525?encryption=tls&auth_mode=login&username=Mailbox-Name&password=\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"wordpress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wordpress"}},[this._v("#")]),this._v(" WordPress")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("function helo($phpmailer) {\n  $phpmailer->isSMTP();\n  $phpmailer->Host = '127.0.0.1';\n  $phpmailer->SMTPAuth = true;\n  $phpmailer->Port = 2525;\n  $phpmailer->Username = 'Mailbox-Name';\n  $phpmailer->Password = '';\n}\n\nadd_action('phpmailer_init', 'helo');\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"yii-framework"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yii-framework"}},[this._v("#")]),this._v(" Yii Framework")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("'components' => [\n     ...\n     'mail' => [\n         'class' => 'yii\\\\swiftmailer\\\\Mailer',\n         'transport' => [\n             'class' => 'Swift_SmtpTransport',\n             'host' => '127.0.0.1',\n             'username' => 'Mailbox-Name',\n             'password' => '',\n             'port' => '2525',\n             'encryption' => 'tls',\n         ],\n     ],\n     ...\n ],\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"nodemailer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodemailer"}},[this._v("#")]),this._v(" Nodemailer")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('let transport = nodemailer.createTransport({\n  host: "127.0.0.1",\n  port: 2525,\n  auth: {\n    user: "Mailbox-Name",\n    pass: ""\n  }\n});\n')])])])}],!1,null,null,null);t.default=n.exports}}]);