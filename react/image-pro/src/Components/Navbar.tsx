import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";
import { useState } from "react";
const Navbar = () => {
  // use useNavigate to navigate to the other page-->
  const navigate = useNavigate();

  // state management--> type is string
  const [error, setError] = useState<string>("");

  // create a logouthandler fun which execute when button is clicked-->
  const logOutHandler = async () => {
    try {
      // default built in function--> firebase auth func
      const auth = getAuth();
      // also built in func-->
      await signOut(auth);
      // navigate to signUp page-->
      navigate("/signup");
    } catch (err) {
      // if error occurs stor to error state-->
      setError(err.message);
    }
  };

  // JSX code-->
  return (
    <div className={`navbar bg-base-100 justify-between ${style.nav__bar}`}>
      {error && error}
      <a className="btn btn-ghost normal-case text-xl">Insta Aec 📷</a>
      <button onClick={logOutHandler} className="btn btn-outline btn-accent">
        Log Out
      </button>
    </div>
  );
};

export default Navbar;
