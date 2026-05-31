import React from "react";
import style from "./Book.module.css";
import { Link } from "react-router-dom";
const Book = (props) => {
  return (
    <li>
      <div
        className={`card w-96 bg-base-100 shadow-xl image-full ${style.book__container}`}
      >
        <figure className={style.img__box}>
          <img
            src={props.description}
            alt={props.title}
            className={style.img}
          />
        </figure>
        <div className="card-body">
          <div className={`card-actions justify-end ${style.btn}`}>
            <button className="btn btn-primary">
              <Link to={`/review/:${props.title}`}>Read Now</Link>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Book;
