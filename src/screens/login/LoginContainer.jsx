import { useState } from "react";
import { useNavigate } from "react-router";

import { useApiCall } from "../../hooks";
import { sendOtpApi, verifyOtpApi } from "../../api/login";
import { useAuth } from "../../contexts/auth";
import { useToast } from "../../contexts/toast";
import Login from "./Login.jsx";

const LoginContainer = () => {
  const [screen, setScreen] = useState("email");
  const { storeTokenFromContext } = useAuth();
  const { setToastMessage } = useToast();
  const apiCall = useApiCall(false);
  const navigate = useNavigate();

  const onSendOtp = async (data) => {
    const result = await apiCall(sendOtpApi(data));
    if (result?.success) {
      setToastMessage("OTP has been successfully sent on your email id");
      setScreen("otp");
    }
  };

  const onVerifyOtp = async (data) => {
    const result = await apiCall(verifyOtpApi(data));
    if (result?.success) {
      setToastMessage("You are successfully logged in");
      await storeTokenFromContext(result.token);
      navigate("/");
    }
  };

  return (
    <Login screen={screen} onSendOtp={onSendOtp} onVerifyOtp={onVerifyOtp} />
  );
};

export default LoginContainer;
