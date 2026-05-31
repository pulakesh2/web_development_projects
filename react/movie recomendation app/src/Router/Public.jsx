import { Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

const Public = ({ children }) => {
  const { user } = useAuth();

  console.log(user);
  if (!user) {
    <Navigate to="/signup" replace={true} />;
  }
  return children;
};

export default Public;
