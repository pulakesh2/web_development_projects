import TwitterCard from "./TwitterCard";
import TwitterForm from "./TwitterForm";
import "./TwitterCard.css";
import "./TwitterForm.css";
import React from "react";

import "./Twitter.css";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

const Twitter = (props) => {
  // state management-->
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();
  const [tweet, setTweet] = useState([]);

  // Get data from backend-->
  const getDataHandler = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://react-twitter-63080-default-rtdb.firebaseio.com/:tweets.json`
      );

      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();

      // create a dummy array-->
      const loader = [];

      for (const el in data) {
        loader.unshift({
          id: el,
          userName: data[el].name,
          tweetData: data[el].tweet,
        });
      }

      // setting the array to original tweetDatabase array-->
      setTweet(loader);
    } catch (err) {
      setIsError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getDataHandler();
  }, [getDataHandler]);

  // Validation of errors-->
  let content = <p className="twitter__msg">list is empty</p>;

  if (isLoading) content = <p className="twitter__msg">Loading....</p>;

  if (tweet.length > 0 && !isLoading)
    content = tweet.map((el) => <TwitterCard key={el.id} tweetData={el} />);

  if (isError) content = <p className="twitter__msg">{isError}</p>;
  // Validation of errors-->

  // JSX Code-->
  return (
    <div>
      <TwitterForm onClick={getDataHandler} />
      <button className="btn btn-blue btn__fetch" onClick={getDataHandler}>
        Reload Tweet
      </button>

      <div className="Card">{content}</div>
    </div>
  );
};

export default Twitter;
