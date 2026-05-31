import React from "react";
import ModelImage from "./ModelImage";
import styles from "./Model.module.css";
import { Link } from "react-router";

const Model = ({ model }) => {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <img src={model.avatar} alt="model_image" />
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{model.modelName}</h3>
      </div>
      <Link to={`/models/:${model.id}`}>View Model Profile</Link>
    </div>
  );
};

export default Model;
