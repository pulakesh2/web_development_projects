import React, { Fragment, useContext } from "react";
import DetailsImg from "./DetailsImg";
import style from "./../Cart/CartList.module.css";
import { useParams } from "react-router-dom";
import CartContext from "../../Store/UseContext";
import Footer from "../Footer/Footer";

const Details = () => {
  const { id } = useParams();

  const contextAPI = useContext(CartContext);

  const imageData = contextAPI.imageData.find((obj) => obj.title === id);
  console.log(imageData);

  const imageDiv = imageData.images.length ? (
    imageData.images.map((img) => {
      return <DetailsImg key={Math.random().toString()} image={img} />;
    })
  ) : (
    <p className={style.message}>Images are Empty</p>
  );

  return (
    <Fragment>
      <div className={style.cart__container}>{imageDiv}</div>
      <Footer />
    </Fragment>
  );
};

export default Details;
