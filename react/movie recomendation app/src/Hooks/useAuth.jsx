import { useContext } from "react";
import { AuthContext } from "../Context/Auth";

// nothing just return the contextAPI poperties-->
export const useAuth = () => {
  return useContext(AuthContext);
};
