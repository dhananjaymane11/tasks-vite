import { useState } from "react";
import { useNavigate } from "react-router";

import { useApiCall } from "../../hooks";
import { sendOtpApi, verifyOtpApi } from "../../api/login";
import { useAuth } from "../../app/AuthProvider.jsx";
import Login from "./Login.jsx";

const LoginContainer = () => {
  const [screen, setScreen] = useState("email");
  const { storeTokenFromContext } = useAuth();
  const apiCall = useApiCall(false);
  const navigate = useNavigate();

  const onSendOtp = async (data) => {
    const { success } = await apiCall(sendOtpApi(data));
    if (success) {
      setScreen("otp");
    }
  };

  const onVerifyOtp = async (data) => {
    const result = await apiCall(verifyOtpApi(data));
    if (result?.success === true) {
      await storeTokenFromContext(result.token);
      navigate("/");
    }
  };

  return (
    <Login screen={screen} onSendOtp={onSendOtp} onVerifyOtp={onVerifyOtp} />
  );
};

export default LoginContainer;
