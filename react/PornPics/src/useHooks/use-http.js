import { useContext, useState } from "react";
import CartContext from "../Store/UseContext";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const contextAPI = useContext(CartContext);

  const getData = async (value = null) => {
    setIsLoading(true);
    const [first, second] = value.trim().split(" ");

    const url = `https://porn-gallery.p.rapidapi.com/pornos/${first}%20${second}`;
    console.log(url);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8a1cdba449mshbbba5af1180ff88p1e5180jsna8486beee6e8",
        "X-RapidAPI-Host": "porn-gallery.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error("something went wrong");
      const data = await response.json();
      console.log("-->", data.results);
      let loader = [];
      data.results.map((obj) => {
        return loader.push(obj);
      });

      contextAPI.addImage(loader);
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  };

  return {
    getData,
    isLoading,
  };
};

export default useHttp;
