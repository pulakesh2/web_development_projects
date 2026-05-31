import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "./accountSlice";
import { Form, useNavigate } from "react-router";
import styles from "./CreateAccount.module.css";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createAccount(name, age, address));
    navigate("/models");
  };

  return (
    <Form className={styles.formContainer} onSubmit={submitHandler}>
      <label>Full Name:</label>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="full name"
        placeholder="Enter Your Name"
        required
      />

      <label>Your Age:</label>
      <input
        onChange={(e) => setAge(e.target.value)}
        type="text"
        name="age"
        placeholder="Enter your age"
        required
      />

      <label>Address:</label>
      <input
        onChange={(e) => setAddress(e.target.value)}
        type="text"
        name="address"
        placeholder="Enter your address"
        required
      />

      <button type="submit">Submit</button>
    </Form>
  );
};

export default CreateAccount;
