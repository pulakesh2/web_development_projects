import React, { useContext, useEffect, useState } from "react";
import Movie from "./Movie";
import style from "./MovieList.module.css";
import Search from "./Search";
import Auth from "../Context/Auth";

const MovieList = (props) => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const genreList = props.genreData;
  // console.log("hey-->", movieList);

  let movieData = useContext(Auth);
  // let movieData = [];

  const getData = async (value) => {
    setIsLoading(true);

    let url;

    if (value) {
      const search = value.split(" ").join("+");
      url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=b516294d23e174ac3a54d8ca33bdfddc`;
    } else {
      url =
        "https://api.themoviedb.org/3/discover/movie?api_key=b516294d23e174ac3a54d8ca33bdfddc";
    }
    try {
      const response = await fetch(url);

      const data = await response.json();
      console.log(data);
      setMovieList(data.results);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, [genreList]);

  const getInputHandler = (data) => {
    genreList.length = genreList.length ? 0 : genreList.length;

    console.log(data);
    getData(data);
  };

  // validation-->
  if (genreList.length) {
    movieData = genreList.map((el) => {
      return <Movie key={Math.random().toString()} data={el} />;
    });
  } else if (movieList.length) {
    movieData = movieList.map((el) => {
      return <Movie key={Math.random().toString()} data={el} />;
    });
  } else {
    movieData = <p className={style.msg}>no movie found</p>;
  }

  console.log("movieData->", movieData);
  // validation-->

  console.log("dsdasd", movieList);
  return (
    <div className={style.movie__container}>
      <Search getInput={getInputHandler} />
      {isLoading ? (
        <span
          className={`loading loading-spinner text-error loading-lg ${style.loading}`}
        ></span>
      ) : (
        <div className={style.movie__content}>
          <ul className={style.movielist}>{movieData}</ul>
        </div>
      )}
    </div>
  );
};

export default MovieList;

// https://api.themoviedb.org/3/discover/movie?api_key=b516294d23e174ac3a54d8ca33bdfddc&with_genres=28

// "https://api.themoviedb.org/3/discover/movie?api_key=b516294d23e174ac3a54d8ca33bdfddc"
// "https://api.themoviedb.org/3/discover/movie?api_key=b516294d23e174ac3a54d8ca33bdfddc";
// "'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=b516294d23e174ac3a54d8ca33bdfddc"
// "https://api.themoviedb.org/3/search/movie?&api_key=b516294d23e174ac3a54d8ca33bdfddc"

// {/* {movieList.length ? (
//               movieList.map((el) => {
//                 return <Movie data={el} />;
//               })
//             ) : (
//               <p className={style.msg}>no movie found</p>
//             )} */}
