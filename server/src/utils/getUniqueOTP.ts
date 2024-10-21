import otp from "otp";

const getUniqueOTP = (length: number = 6) => {
  const OTP = parseInt(new otp().hotp(length));

  if (OTP.toString().length < length) {
    return OTP + Math.pow(10, length - 1);
  }

  return OTP;
};

export default getUniqueOTP;
