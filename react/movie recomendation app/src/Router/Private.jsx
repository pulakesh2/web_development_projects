import { Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../Context/Auth";

const Private = ({ children }) => {
  const { user } = useAuth();

  const data = useContext(AuthContext);
  console.log(data);
  console.log(user);

  if (user) {
    <Navigate to="/" replace={true} />;
  }
  return children;
};

export default Private;
