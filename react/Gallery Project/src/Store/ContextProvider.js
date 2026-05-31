import { useState } from "react";
import APIContext from "./APIContext";

const ContextProvider = (props) => {
  // State Management-->
  const [userData, setUserData] = useState("");
  const [pageData, setPageData] = useState("");

  // Data we get from input field we just split it and store to API userData-->
  const getData = (value) => {
    setUserData(value.trim().split(" ").join("+"));
  };

  // Data we get from clicking imageList and that data obj store in pageData API-->
  const pageDataFn = (obj) => {
    setPageData({
      // comment: obj.comments,
      tags: obj.tags,
      downloads: obj.downloads,
      likes: obj.likes,
      users: obj.user,
      views: obj.views,
      url: obj.largeImageURL,
    });
  };

  // Assigned functionality to our API-->
  const APIData = {
    userData: userData,
    pageData: pageData,
    getData: getData,
    pageDataFn: pageDataFn,
  };

  return (
    <APIContext.Provider value={APIData}>{props.children}</APIContext.Provider>
  );
};

export default ContextProvider;
