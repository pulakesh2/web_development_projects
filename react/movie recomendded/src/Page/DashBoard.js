import React, { useEffect, useState } from "react";
// import data from "./../Data/data.json";

// import Auth from "../Context/Auth";
import style from "./DashBoard.module.css";
import "./DashBoard.module.css";
import UsersList from "../Components/UsersList";
import MovieList from "../Components/MovieList";
// import Auth from "../Context/Auth";

const DashBoard = () => {
  // const { user, interest } = useContext(Auth);
  const [details, setDetails] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [userData, setUserData] = useState("");
  const [genreData, setGenreData] = useState([]);
  const [isGenre, setIsGenre] = useState(false);

  const getGenreId = (genre) => {
    let genreId;
    switch (genre) {
      case "Action":
        genreId = 28;
        break;
      case "Adventure":
        genreId = 12;
        break;
      case "Animation":
        genreId = 16;
        break;
      case "Comedy":
        genreId = 35;
        break;
      case "Crime":
        genreId = 80;
        break;
      case "Documentary":
        genreId = 99;
        break;
      case "Drama":
        genreId = 18;
        break;
      case "Family ":
        genreId = 10751;
        break;
      case "Fantasy":
        genreId = 14;
        break;
      case "Horror":
        genreId = 27;
        break;
      case "Romance":
        genreId = 10749;
        break;
      case "Science Fiction":
        genreId = 878;
        break;
      case "Western":
        genreId = 37;
        break;
      default:
        genreId = 0;
    }

    return genreId;
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://movie-dca92-default-rtdb.firebaseio.com/userData.json"
      );

      if (!response.ok) throw new Error("something went wrong...");

      const data = await response.json();

      for (const item in data) {
        setDetails({
          user: data[item].user,
          genre: data[item].genre,
          range: data[item].range,
          actor: data[item].actor,
        });
      }

      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const matchMovies = async (genre) => {
    const genreId = getGenreId(genre);
    console.log(genre, "=", genreId);
    setIsGenre(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=b516294d23e174ac3a54d8ca33bdfddc&with_genres=${genreId}`
      );
      if (!response.ok) throw new Error("something went wrong");

      const data = await response.json();
      setGenreData(data.results);

      // setUserData(details);
      setIsGenre(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={style.container}>
      <UsersList />
      {isGenre ? (
        <span
          className={`loading loading-spinner text-success loading-lg ${style.matching}`}
        ></span>
      ) : (
        <MovieList genreData={genreData} />
      )}
      <div className={`hero min-h-screen bg-base-200 ${style.details}`}>
        {isLoading ? (
          <span className="loading loading-spinner text-success"></span>
        ) : (
          <div className="hero-content flex-col ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User : </span>
                    <span className="label-text">{details.user}</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Favourite Actor : </span>
                    <span className="label-text">{details.actor}</span>
                  </label>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Imdb Ratings : </span>
                    <span className="label-text">{details.range}</span>
                  </label>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Genre : </span>
                    <span className="label-text">{details.genre}</span>
                  </label>
                </div>
              </div>
            </div>
            <button
              className="btn btn-outline btn-success"
              onClick={() => matchMovies(details.genre)}
            >
              Match
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoard;
