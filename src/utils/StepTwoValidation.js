export const isStepTwoValid = (data) => {
  const { email, phoneNumber, password, confirmPassword } = data;
  console.log("the data", data);

  const errors = {};
  let isValid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{7}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;


  if (!email || !emailRegex.test(email)) {
    errors.email = "Зөв мэйл хаяг оруулна уу";
    isValid = false;
  }
  if (!phoneNumber || phoneRegex.test(phoneNumber) || phoneNumber.length > 8) {
    errors.phoneNumber = "8 оронтой дугаар оруулна уу.";
    isValid = false;
  }
  if (!password || !passwordRegex.test(password)) {
    errors.password = "8 тэмдэгттэй,том, жижиг үсэг тоо агуулсан байна.";
    isValid = false;
  }
  if (passwordRegex !== confirmPassword) {
    errors.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна.";
  }
  return { isValid, errors };
};
