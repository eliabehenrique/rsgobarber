export default {
  host: 'smtp.mailtrap.io',
  port: 2525,
  secure: false, // ssl/tls
  auth: {
    user: '69ba1fca751e0b',
    pass: '4b7394b16d121c',
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
