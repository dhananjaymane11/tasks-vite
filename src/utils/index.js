export const addDataToArray = (array, data) => {
  return [...array, data];
};

export const removeDataFromArray = (array, id) => {
  return array.filter((item) => item._id !== id);
};

export const updateDataInArray = (array, id, data) => {
  return array.map((item) => (item._id === id ? { ...item, ...data } : item));
};

export const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

export const validateOtp = (otp) => {
  const regex = /^[0-9]{6}$/;
  return regex.test(otp);
};
