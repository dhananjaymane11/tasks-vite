import { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { validateEmail, validateOtp } from "../../utils";

import { Header, Container, InputWrapper } from "./Login.style";

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

  const renderLoginView = () => {
    return (
      <InputWrapper>
        <TextField
          error
          fullWidth
          variant="standard"
          label="Enter Email"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
          error={Boolean(errorText)}
          helperText={errorText}
        />
        <Button
          sx={{ whiteSpace: "nowrap" }}
          variant="contained"
          onClick={handleSendOTP}
        >
          Send OTP
        </Button>
      </InputWrapper>
    );
  };

  const renderOtpView = () => {
    return (
      <InputWrapper>
        <TextField
          error
          fullWidth
          variant="standard"
          label="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e?.target?.value)}
          error={Boolean(errorText)}
          helperText={errorText}
        />
        <Button
          sx={{ whiteSpace: "nowrap" }}
          variant="contained"
          onClick={handleVerifyOTP}
        >
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
