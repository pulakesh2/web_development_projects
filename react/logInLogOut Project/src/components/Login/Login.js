import React, { useContext, useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../Context/AuthContex";
import Input from "../UI/Input/Input";

// email reducer function-->
const emailReducer = (state, actions) => {
  if (actions.type === "USER__INPUT") {
    return {
      value: actions.val,
      isValid: actions.val.includes("@"),
    };
  }
  if (actions.type === "INPUT__BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

// password reducer function-->
const passwordReduce = (state, actions) => {
  if (actions.type === "USER__INPUT") {
    return {
      value: actions.val,
      isValid: actions.val.trim().length > 6,
    };
  }
  if (actions.type === "INPUT__BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const Login = () => {
  const ctx = useContext(AuthContext);

  // email Reducer-->
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  // password Reducer-->
  const [passwordState, dispatchPassword] = useReducer(passwordReduce, {
    value: "",
    isValid: false,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  // Use EFFECT-->👇

  const { isValid: eamilIsValid } = emailState;
  const { isValid: PasswordIsValid } = passwordState;

  useEffect(() => {
    setFormIsValid(eamilIsValid && PasswordIsValid);
  }, [eamilIsValid, PasswordIsValid]);

  // Use EFFECT-->☝️

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER__INPUT", val: event.target.value });
    // setFormIsValid(emailState.isValid && passwordState.value.trim().length > 6);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER__INPUT", val: event.target.value });
    // setFormIsValid(emailState.isValid && passwordState.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT__BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT__BLUR" });
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.loginHandler(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={passwordState.isValid}
          id="email"
          type="email"
          label="E-mail"
        />

        <Input
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordState.isValid}
          id="password"
          type="password"
          label="Password"
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
