import Button from "../UI/Button";
import React, { useRef } from "react";

const LogInForm = (props) => {
  //   Declare the Variable to store user Input
  const userName = useRef();
  const userBio = useRef();
  const userPassword = useRef();

  //   submit function-->
  const submitHandler = (event) => {
    event.preventDefault();

    const inputData = {
      userInputName: userName.current.value,
      userInputBio: userBio.current.value,
      userInputPassword: userPassword.current.value,
    };

    // Validation-->
    // if (
    //   (!inputData.userInputName.trim() === "" ||
    //     !isNaN(inputData.userInputName)) &&
    //   inputData.userInputPassword.trim().length > 6
    // ) {
    props.extractData(inputData);
    // }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="user__name-box">
          <label htmlFor="user__name">Name : </label>
          <input
            type="text"
            placeholder="your Name"
            id="user__name"
            ref={userName}

            // onChange={(event) => getUserData("user__name", event.target.value)}
          />
        </div>

        <div className="user__bio-box">
          <label htmlFor="user__bio">bio : </label>
          <input
            type="text"
            placeholder="your bio"
            id="user__bio"
            ref={userBio}

            // onChange={(event) => getUserData("user__bio", event.target.value)}
          />
        </div>

        <div className="user__password-box">
          <label htmlFor="user__password">password : </label>
          <input
            type="password"
            placeholder="your password"
            id="user__password"
            ref={userPassword}
            // onChange={(event) =>
            //   getUserData("user__password", event.target.value)
            // }
          />
        </div>
        <Button
          //   onClick={props.logInToken}
          type="submit"
          title="log in"
          //   disabled={disabled}
        />
      </form>
    </div>
  );
};

export default LogInForm;
