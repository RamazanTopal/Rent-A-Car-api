const nodemailer = require('nodemailer');

class NotificationService {
  // eslint-disable-next-line class-methods-use-this
  async sendMailNotification(email, subject, data) {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.NOTIFY_USER, // generated ethereal user
          pass: process.env.NOTIFY_PASSWORD, // generated ethereal password
        },
      });

      // send mail with defined transport object
      await transporter.sendMail({
        from: '"RENT A CAR ADMIN" <info@rentacar.com>', // sender address
        to: `${email}`, // list of receivers
        subject: `${subject}`, // Subject line
        html: `${data}`, // html body
      });

      return {
        success: true,
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = NotificationService;
