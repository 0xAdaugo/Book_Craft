

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_SERVICE_USER,
    pass: process.env.EMAIL_SERVICE_PASSWORD,
  },
});

const sendResetPasswordEmail = (email, resetToken) => {
  const resetUrl = `http://yourfrontend.com/reset-password/${resetToken}`;
  const mailOptions = {
    from: process.env.EMAIL_SERVICE_USER,
    to: email,
    subject: 'Password Reset',
    text: `You requested a password reset. Please use the following link to reset your password: ${resetUrl}`,
    html: `<p>You requested a password reset. Please use the following link to reset your password:</p><a href="${resetUrl}">${resetUrl}</a>`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendResetPasswordEmail };
