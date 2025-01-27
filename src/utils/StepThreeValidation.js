export const isStepThreeValid = (data) => {
  const { age } = data;

  const errors = {};
  let isValid = true;
  const ageRegex = /^[0-9]+$/;
  const minAge = 18;
  const maxAge = 100;

  if (!age || !ageRegex.test(age) || age < minAge || age > maxAge) {
    errors.age = `Нас 18-100-ийн хооронд байх ёстой.`;
    isValid = false;
  }
  return { isValid, errors };
};
