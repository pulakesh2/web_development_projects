import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import styles from "./Account.module.css";

const Account = () => {
  const account = useSelector((store) => store.account);
  const navigate = useNavigate();

  useEffect(() => {
    if (!account.name) {
      navigate("/");
    }
  }, [account.name, navigate]);

  return (
    <div className={styles.accountContainer}>
      <h2 className={styles.title}>Account Details</h2>
      <p>
        <strong>Name:</strong> {account.name}
      </p>
      <p>
        <strong>Age:</strong> {account.age}
      </p>
      <p>
        <strong>Address:</strong> {account.address}
      </p>
      <p>
        <strong>Models:</strong>{" "}
        {account.models.length === 0
          ? "You have not added your favourite models"
          : account.models.join(", ")}
      </p>
      <Link to="/models">Go to Model Section</Link>
    </div>
  );
};

export default Account;
