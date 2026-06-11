export const sendOtpApi = (data) => ({
  endpoint: `login/send-otp`,
  method: 'POST',
  data,
});

export const verifyOtpApi = (data) => ({
  endpoint: `login/verify-otp`,
  method: 'POST',
  data,
});
