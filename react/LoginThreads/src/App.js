import React, { useEffect, useState } from "react";
import LogInForm from "./Components/LogInUser/LogInForm";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  const [userData, setUserData] = useState([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const logInValid = localStorage.getItem("isLoggedIn");
    if (logInValid) {
      setIsValid(true);
    }
  }, []);

  // logIn function-->
  const goToHome = () => {
    console.log(userData.length);
    // if (userData.length) {
    localStorage.setItem("isLoggedIn", "1");
    setIsValid(true);
    // }
  };

  // logOut function-->
  const goToLogin = () => {
    localStorage.removeItem("isLoggedIn");
    setIsValid(false);
  };

  // extract Data-->
  const extractData = (obj) => {
    console.log("this is from extractData", obj);
    setUserData([obj, ...userData]);
  };

  return (
    <div>
      {!isValid ? (
        <LogInForm extractData={extractData} />
      ) : (
        <HomePage MoveUserData={userData} logOutToken={goToLogin} />
      )}
      <HomePage MoveUserData={userData} logOutToken={goToLogin} />
    </div>
  );
}

export default App;
