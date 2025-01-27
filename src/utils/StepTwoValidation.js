export const isStepTwoValid = (data) => {
  const { email, phoneNumber, password, confirmPassword, type } = data;
  console.log("the data", data);

  const errors = {};
  let isValid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{7}$/;

  const passwordMixLength = 8;

  if (!email || !emailRegex.test(email)) {
    errors.email = "Зөв мэйл хаяг оруулна уу";
    isValid = false;
  }
  if (!phoneNumber || phoneRegex.test(phoneNumber) || phoneNumber.length > 8) {
    errors.phoneNumber = "8 оронтой дугаар оруулна уу.";
    isValid = false;
  }
  if (!password || password.length < passwordMixLength) {
    errors.password = "Хамгийн багадаа 8-н тэмдэгттэй байна";
    isValid = false;
  }
  if (password !== confirmPassword) {
    errors.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна.";
  }
  return { isValid, errors };
};
