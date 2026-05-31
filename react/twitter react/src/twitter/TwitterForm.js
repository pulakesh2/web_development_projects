import React from "react";
import "./TwitterForm.css";
import ReactDOM from "react-dom";
import { useRef } from "react";
import MsgBox from "../MsgBox/MsgBox";
import { useState } from "react";

//
//

const TwitterForm = (props) => {
  const enterUserName = useRef();
  const enterTweet = useRef();
  const [msg, setMsg] = useState(false);

  // Store data to backend-->
  const addTweetHandler = async (tweetObj) => {
    try {
      const response = await fetch(
        `https://react-twitter-63080-default-rtdb.firebaseio.com/:tweets.json`,
        {
          method: "POST",
          body: JSON.stringify(tweetObj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const userInputHandler = (event) => {
    event.preventDefault();

    // store user value-->
    const userData = {
      id: Math.random(),
      name: enterUserName.current.value,
      tweet: enterTweet.current.value,
    };

    // show Msg of confirmation-->
    setTimeout(() => {
      setMsg(false);
    }, 3000);

    // validation-->
    if (userData.name && userData.tweet) {
      addTweetHandler(userData);
    }
    setMsg(true);

    enterUserName.current.value = "";
    enterTweet.current.value = "";
  };

  return (
    <div>
      {msg
        ? ReactDOM.createPortal(<MsgBox />, document.getElementById("msg"))
        : ""}
      <div className="twitter__form">
        <form onSubmit={userInputHandler}>
          <div className="twitter__form-name flex">
            <label htmlFor="username">Your Name: </label>
            <input
              type="text"
              placeholder="Enter your name"
              id="username"
              ref={enterUserName}
            />
          </div>
          <div className="twitter__form-name flex">
            <label htmlFor="tweet">Tweet: </label>
            <textarea id="tweet" placeholder="Your Tweet" ref={enterTweet} />
          </div>
          <button type="submit" className="btn btn-blue">
            Tweet
          </button>
        </form>
      </div>
    </div>
  );
};

export default TwitterForm;
