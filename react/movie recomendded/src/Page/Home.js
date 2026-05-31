import React, { useContext, useState } from "react";
import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import Auth from "../Context/Auth";

const Home = () => {
  const [range, setRange] = useState(5);
  const [genre, setGenre] = useState();
  const [actor, setActor] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { getInterest, user } = useContext(Auth);

  const getData = async () => {
    setIsLoading(true);

    try {
      getInterest({ genre, actor, range });
      const response = await fetch(
        "https://movie-dca92-default-rtdb.firebaseio.com/userData.json",
        {
          method: "POST",
          body: JSON.stringify({ user: user[0].name, genre, actor, range }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) throw Error("something went wrong...");

      const data = await response.json();
      console.log(data);
      setIsLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  return (
    <div className={style.home__section}>
      {error && error}
      <div className="genre-box">
        <select
          className="select select-success w-full max-w-xs"
          onChange={(e) => setGenre(e.target.value)}
        >
          <option disabled selected>
            Movie Genre
          </option>
          <option>Action</option>
          <option>Horror</option>
          <option>Drama</option>
          <option>Science Fiction</option>
          <option>Romance</option>
          <option>Western</option>
          <option>Comedy</option>
          <option>Thriller</option>
          <option>Documentary</option>
        </select>
      </div>

      <div className="actor-box">
        <select
          className="select select-success w-full max-w-xs"
          onChange={(e) => setActor(e.target.value)}
        >
          <option disabled selected>
            Favourite Actor
          </option>
          <option>Brad Pitt</option>
          <option>Tom Cruise</option>
          <option>Chris Evans</option>
          <option>Robert Pattinson</option>
          <option>Chris Hemsworth</option>
          <option>Henry Cavill</option>
          <option>Leonardo DiCaprio</option>
          <option>Hrithik Roshan</option>
          <option>Ryan Reynolds</option>
          <option>Marlon Brando</option>
          <option>George Clooney</option>
          <option>Ryan Gosling</option>
          <option>Bradley Cooper</option>
          <option>Jake Gyllenhaal</option>
          <option>Hugh Jackman</option>
          <option>David Beckham</option>
          <option>Robert Downey Jr.</option>
          <option>James Franco</option>
          <option>Jason Momoa</option>
          <option>Justin Timberlake</option>
        </select>
      </div>

      <div className="imdb-box">
        <p className={style.imdb__rating}>Imdb Rating : {range}</p>
        <input
          type="range"
          min={0}
          max="10"
          // value="40"
          defaultValue="5"
          className="range range-success"
          onChange={(e) => {
            setRange(e.target.value);
          }}
        />
      </div>
      <button className="btn btn-outline btn-success" onClick={getData}>
        {isLoading ? "Loading...." : "Submit"}
      </button>
    </div>
  );
};

export default Home;
