const nodemailer = require("nodemailer");

const mailToUSer = async (data) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.PASS_KEY,
    },
  });
  await transporter.sendMail(data);
};
const ssendMail = async (name, email, pass) => {
  try {
    let content = {
      from: process.env.USER_MAIL,
      to: email,
      subject: "An Authentication mail",
      text: `Hi ${name} thi is your password :${pass}`,
    };
    await mailToUSer(content);
    console.log("mail sent successfully");
  } catch (error) {
    console.log("mail unsuccessfull", error);
  }
};

module.exports = ssendMail;
