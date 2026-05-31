import { Link } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = (props) => {
  return (
    <div className="product">
      <div className="product__image-box">
        <img
          src="./img/peaky.jpg"
          alt="series__image"
          className="product__image"
        />
      </div>
      <div className="product__content">
        <div className="flex web__name">
          <p>Series Name: </p>
          <p>Peaky Blinders</p>
        </div>

        <div className="flex">
          <p>Release Date: </p>
          <p>20 may, 2014</p>
        </div>

        <p className="product__description">
          This is peaky blinders series. you will get full access to peaky
          blinders all season if you purchess this series. It will available
          only here and New Episode will be uploaded here
        </p>
      </div>
      <div className="product__link-box">
        <Link to="/" className="btn">
          Pay 299$
        </Link>
      </div>
      <Link to="/" className="btn back">
        &larr;
      </Link>
    </div>
  );
};

export default ProductPage;
