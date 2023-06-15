import fetch from "node-fetch";

const recaptchaVerification = async (captchaValue) => {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaValue}`,
    { method: "post" }
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export default recaptchaVerification;
