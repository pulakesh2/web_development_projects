import axios from "axios";
import { useContext, useEffect, useState } from "react";
import style from "./Card.module.css";
import ImageList from "./ImageList";
import APIContext from "../../Store/APIContext";
// import { Link } from "react-router-dom";

const Image = () => {
  // Manage State-->
  const [myData, setMyData] = useState([]);

  // contextApi-->
  const data = useContext(APIContext);

  useEffect(() => {
    // Create a function and call it immediatly-->
    (async () => {
      try {
        // get the respond-->
        const res = await axios.get(
          `https://pixabay.com/api/?key=38344134-e376d0505cf9a4010c03b04a2&q=${data.userData}&image_type=photo`
        );

        // store only object in array state-->
        setMyData(res.data.hits);
      } catch (error) {
        // return the error-->
        console.log("ERROR");
      }
    })();
  }, [data.userData]);

  // store the JSX code to imgList-->
  const imgList = myData.map((el) => (
    // <Link to="/page">
    <ImageList
      onClick={() => console.log("hello")}
      key={Math.random().toString()}
      imgUrl={el.largeImageURL}
      data={el}
    />
    // </Link>
  ));

  //   return JSX code-->
  return (
    <ul className={`${style.grid} ${style.box}`}>
      {imgList.length ? (
        imgList
      ) : (
        <p className={style.p}>we are not able to fetch the Data</p>
      )}
    </ul>
  );
};

export default Image;
