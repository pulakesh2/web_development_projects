import React, { useState } from "react";
import "./TwitterForm.css";
const TwitterForm = (props) => {
  const [enterUserName, setEnterUSerName] = useState("");
  const [enterTweet, setEnterTweet] = useState("");

  // Events-->

  const changeUSerHandler = (event) => {
    setEnterUSerName(event.target.value);
  };

  const changeTweetHandler = (event) => {
    setEnterTweet(event.target.value);
  };

  const userInputHandler = (event) => {
    event.preventDefault();
    // store user value-->
    const userData = {
      id: Math.random(),
      name: enterUserName,
      tweet: enterTweet,
    };
    // console.log(userData);

    props.getTweetData(userData);
    // Reset the values-->
    setEnterUSerName("");
    setEnterTweet("");
  };

  return (
    <div>
      <div className="twitter__form">
        <form onSubmit={userInputHandler}>
          <div className="twitter__form-name flex">
            <label for="username">Your Name: </label>
            <input
              onChange={changeUSerHandler}
              value={enterUserName}
              type="text"
              placeholder="Enter your name"
              id="username"
            />
          </div>
          <div className="twitter__form-name flex">
            <label for="tweet">Tweet: </label>
            <textarea
              value={enterTweet}
              onChange={changeTweetHandler}
              id="tweet"
              placeholder="Your Tweet"
            />
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
