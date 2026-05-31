import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { AuthContext } from "./Auth";

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //  this function store the data of user when user is signed in ( store to the firebase )
    // it takes two para one is auth ( built in ) another is function which take user arg-->
    // it check if there is user or not, if yes then assigned to user
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // we assigned user and isLoading -->
      setUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    user: user,
    isLoading: isLoading,
  };
  return (
    <AuthContext.Provider value={value}>
      {/* {!isLoading && props.children} */}
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
