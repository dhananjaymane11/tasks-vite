import { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { validateEmail, validateOtp } from "../../utils";

import { Header, Container, InputWrapper, InputRow } from "./Login.style";

const Login = ({ onSendOtp, onVerifyOtp }) => {
  const [screen, setScreen] = useState("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleSendOTP = async () => {
    if (validateEmail(email)) {
      setErrorText("");
      await onSendOtp({ email });
      setScreen("otp");
    } else {
      setErrorText("Enter valid email id");
    }
  };

  const handleVerifyOTP = async () => {
    if (validateOtp(otp)) {
      setErrorText("");
      await onVerifyOtp({ email, otp });
    } else {
      setErrorText("Enter valid OTP");
    }
  };

  const handleEmailInputChange = (e) => {
    const value = e?.target?.value?.trim();
    setEmail(value);
    if (!value) {
      setErrorText("Enter valid email id");
    } else {
      setErrorText("");
    }
  };

  const handleOtpInputChange = (e) => {
    const value = e?.target?.value?.trim();
    setOtp(value);
    if (!value) {
      setErrorText("Enter valid OTP");
    } else {
      setErrorText("");
    }
  };

  const renderLoginView = () => {
    return (
      <InputWrapper>
        <InputRow>
          <TextField
            error
            fullWidth
            variant="standard"
            label="Enter Email"
            value={email}
            onChange={handleEmailInputChange}
            error={Boolean(errorText)}
            helperText={errorText}
          />
        </InputRow>
        <Button variant="contained" onClick={handleSendOTP}>
          Send OTP
        </Button>
      </InputWrapper>
    );
  };

  const renderOtpView = () => {
    return (
      <InputWrapper>
        <InputRow>
          <TextField
            error
            fullWidth
            variant="standard"
            label="Enter OTP"
            value={otp}
            onChange={handleOtpInputChange}
            error={Boolean(errorText)}
            helperText={errorText}
          />
        </InputRow>
        <Button variant="contained" onClick={handleVerifyOTP}>
          Verify OTP
        </Button>
      </InputWrapper>
    );
  };

  return (
    <Container>
      <Header>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Login
        </Typography>
      </Header>
      {screen === "email" ? renderLoginView() : renderOtpView()}
    </Container>
  );
};

export default Login;
