import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { TopBar } from "../../components";
import { Header, Container } from "./Profile.style";

export default function Profile({ onLogout }) {
  return (
    <Container>
      <TopBar />
      <Header>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Profile
        </Typography>
        <Button variant="contained" onClick={onLogout}>
          Logout
        </Button>
      </Header>
    </Container>
  );
}
