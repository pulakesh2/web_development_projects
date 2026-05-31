import { useContext } from "react";
import style from "./ImgCard.module.css";
import APIContext from "../../Store/APIContext";
import { Link } from "react-router-dom";

const ImageList = (props) => {
  // get the api context-->
  const api = useContext(APIContext);

  // create a function which call the pageDataFn and pass the obj to API-->
  const goToPageHandler = () => {
    api.pageDataFn(props.data);
  };

  // JSX Code-->
  return (
    <li className={style.img__box} onClick={goToPageHandler}>
      <Link to="/page">
        <img src={props.imgUrl} alt="file not found" className={style.img} />
      </Link>
    </li>
  );
};

export default ImageList;
