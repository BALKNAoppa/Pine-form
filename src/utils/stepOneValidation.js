export const isStepOneValid = (data) => {
  const { firstName, lastName, userName } = data;
  const errors = {};
  let isValid = true;

  if (firstName.length <= 1) {
    errors.firstName = "Нэрээ оруулна уу";
    isValid = false;
  }
  if (lastName.length <= 1) {
    errors.lastName = "Овгоо оруулна уу";
    isValid = false;
  }
  if (userName.length <= 1) {
    errors.userName = "Хэрэглэгчийн нэрээ оруулна уу";
    isValid = false;
  }
  return { isValid, errors };
};
