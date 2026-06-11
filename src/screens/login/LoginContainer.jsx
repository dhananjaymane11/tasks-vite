import { useNavigate } from "react-router";

import { useApiCall } from "../../hooks";
import { sendOtpApi, verifyOtpApi } from "../../api/login";
import { useAuth } from "../../app/AuthProvider.jsx";
import Login from "./Login.jsx";

const LoginContainer = () => {
  const { storeTokenFromContext } = useAuth();
  const apiCall = useApiCall(false);
  const navigate = useNavigate();

  const onSendOtp = async (data) => {
    await apiCall(sendOtpApi(data));
  };

  const onVerifyOtp = async (data) => {
    const result = await apiCall(verifyOtpApi(data));
    if (result?.success === true) {
      await storeTokenFromContext(result.token);
      navigate("/");
    }
  };

  return <Login onSendOtp={onSendOtp} onVerifyOtp={onVerifyOtp} />;
};

export default LoginContainer;
