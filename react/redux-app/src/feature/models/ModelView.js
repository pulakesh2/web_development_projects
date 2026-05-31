import { useLoaderData, useNavigate } from "react-router";
import ModelImage from "./ModelImage";
import styles from "./ModelView.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ModelView = () => {
  const model = useLoaderData();

  const account = useSelector((store) => store.account);
  const navigate = useNavigate();

  useEffect(() => {
    !account.name && navigate("/");
  });

  return (
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        &larr; back
      </button>
      <div className={styles.bio}>
        <h2 className={styles.name}>{model.modelName}</h2>
        <p>
          <strong>Origin:</strong> {model.origin}
        </p>
        <p>
          <strong>Born:</strong> {model.born}
        </p>
        <p>
          <strong>Bio:</strong> {model.bio}
        </p>
      </div>

      <div className={styles.details}>
        <p>
          <strong>Price:</strong> {model.price}₹
        </p>
        <p>
          <strong>Available Hour:</strong> {model.availableHour}
        </p>
        <p>
          <strong>Services:</strong> {model.provide.join(", ")}
        </p>
      </div>
      <div className={styles.links}>
        {model.links.map((link, index) => (
          <p>
            link {index + 1} :{" "}
            <a target="_blank" rel="noreferrer" href={link}>
              {link}
            </a>
          </p>
        ))}
      </div>

      <div className={styles.gallery}>
        <h3>Model Images</h3>
        <div className={styles.imageGrid}>
          {model.images.map((image, index) => (
            <ModelImage image={image} key={index} />
          ))}
        </div>
      </div>
      <button>Book Me!</button>
    </div>
  );
};
export async function loader({ params }) {
  try {
    const id = params.modelId.split(":")[1];
    const res = await fetch(`http://localhost:9000/models/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }

  //   console.log(res);
}
export default ModelView;
