import { useToast } from "../../contexts/toast";
import { useAuth } from "../../contexts/auth";
import Profile from "./Profile.jsx";

const ProfileContainer = () => {
  const { removeTokenFromContext } = useAuth();
  const { setToastMessage } = useToast();

  const onLogout = () => {
    setToastMessage("You are successfully logged out");
    removeTokenFromContext();
  };

  return <Profile onLogout={onLogout} />;
};

export default ProfileContainer;
