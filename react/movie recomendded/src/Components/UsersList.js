// import React from "react";
// import style from './'
import style from "./../Page/DashBoard.module.css";

import { useEffect, useState, Fragment } from "react";

const UsersList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [db, setDb] = useState([]);
  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://movie-dca92-default-rtdb.firebaseio.com/userData.json"
      );

      if (!response.ok) throw new Error("something went wrong...");

      const data = await response.json();

      const loader = [];

      for (const item in data) {
        loader.unshift({
          id: item,
          user: data[item].user,
          genre: data[item].genre,
          range: data[item].range,
          actor: data[item].actor,
        });
      }

      setDb(loader);

      // setDetails(loader);
      //   console.log(details);
      setIsLoading(false);
      //   setIsLoading(db);
    } catch (err) {
      console.log(err.message);
    }
  };

  //   console.log(db);
  useEffect(() => {
    getData();
  }, []);

  const list = db.map((obj) => {
    return (
      <tr key={obj.id}>
        <th>1</th>
        <td>{obj.user}</td>
        <td>{obj.genre}</td>
        <td>{obj.range}</td>
        <td>{obj.actor}</td>
      </tr>
    );
  });

  //   return <ul>{list}</ul>;

  return (
    <div className={style.table__box}>
      {isLoading ? (
        // <span
        //   className={`loading loading-spinner loading-lg ${style.loading}`}
        // ></span>
        <span
          className={`loading loading-spinner text-primary loading-lg ${style.loading}`}
        ></span>
      ) : (
        <div className={`overflow-x-auto `}>
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Genre</th>
                <th>Imdb Rating</th>
                <th>Favourite Actor</th>
              </tr>
            </thead>
            {/* <tbody>{db.length ? list : <p>user is empty</p>}</tbody> */}
            <tbody>{list}</tbody>
          </table>
        </div>
      )}
    </div>
  );

  //   return <div>{props.db}</div>;
};

export default UsersList;
