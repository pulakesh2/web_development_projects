const { useState } = require("react");

const useFetch = () => {
  const [dataBase, setDataBase] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (key) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://blog-react-2811c-default-rtdb.firebaseio.com/${key}.json`
      );

      if (!response.ok) throw new Error("unable to fetch the data");

      const results = await response.json();

      let databaseArray = [];

      for (const data in results) {
        databaseArray.push({
          key: data,
          title: results[data].title,
          description: results[data].description,
        });

        setDataBase(databaseArray);
      }
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  };

  return {
    dataBase,
    fetchData,
    isLoading,
  };
};

export default useFetch;
