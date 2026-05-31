// Create Context-->
import { createContext, useState, useEffect, FC } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

// here we use the type of our context API-->
// It has user and boolean isLoading variables-->
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
}

// we intialize the default value to the contextAPI-->
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
});

// create Provider--> this is use for children
interface AuthProviderProps {
  children: React.ReactElement;
}

// FC <interface> this is used just to access the children nothing big deal-->
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  // we intialize the state management-->
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // we use useEffect whenever page is load this function run-->
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

  // so assigned to user and isLoading value-->
  const value = {
    user,
    isLoading,
  };

  // Note--> when page is loading isLoading is true then it change to false-->
  //  we pass if there is some User already then switch to that User-->

  // to get the data to every cmpnt we use provider and set its data to value-->
  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
