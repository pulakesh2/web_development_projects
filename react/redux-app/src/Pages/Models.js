import React, { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Model from "../feature/models/Model";
import styles from "./Models.module.css";
import { useSelector } from "react-redux";
const Models = () => {
  const models = useLoaderData();
  const account = useSelector((store) => store.account);
  const navigate = useNavigate();

  useEffect(() => {
    !account.name && navigate("/");
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Explore Our Models</h2>
      <div className={styles.grid}>
        {models.map((model) => (
          <Model model={model} key={model.id} />
        ))}
      </div>
    </div>
  );
};
export async function loader() {
  try {
    const res = await fetch("http://localhost:9000/models");
    if (!res.ok) throw new Error("Connection is not succesfully obtained");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export default Models;
