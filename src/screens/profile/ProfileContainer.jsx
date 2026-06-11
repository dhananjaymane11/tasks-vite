import { useAuth } from "../../app/AuthProvider.jsx";
import Profile from "./Profile.jsx";

const ProfileContainer = () => {
  const { removeTokenFromContext } = useAuth();
  const onLogout = () => {
    removeTokenFromContext();
  };

  return <Profile onLogout={onLogout} />;
};

export default ProfileContainer;
