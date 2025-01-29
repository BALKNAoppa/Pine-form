export const isStepThreeValid = (data) => {
  const { dateBirth } = data;

  const errors = {};
  let isValid = true;

  if (!dateBirth) {
    errors.dateBirth = "Төрсөн огноогоо оруулна уу.";
    isValid = false;
  } else {
    const birthDate = new Date(dateBirth);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age < 18 || age > 100) {
      errors.dateBirth = `18-н нас хүрсэн байх ёстой.`;
      isValid = false;
    }
  }

  return { isValid, errors };
};