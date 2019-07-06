export default {
  host: process.env.MAIL_HOST,
  port: process.env.PORT,
  secure: false, // ssl/tls
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
  default: {
    from: 'TeamBot GoBarber <noreply@gobarber.com>',
  },
};

/* --Providers--
  Amazon SES,
  Mailgun,
  Sparkpost,
  Mandril (Mailchimp),

  Mailtrap.io(for dev env)
*/
