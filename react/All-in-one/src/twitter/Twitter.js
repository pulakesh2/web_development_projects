import TwitterCard from "./TwitterCard";
import TwitterForm from "./TwitterForm";
import React, { useState } from "react";

import "./Twitter.css";

// let tweetDatabase = TWITTER__DUMMIY__VALUES;
const TWITTER__DUMMIY__VALUES = [
  // {
  //   Id: "0",
  //   name: "Fabrizio Romano",
  //   tweet: `Tuchel: “We can win all the titles”. 🚨🔴 #FCBayern Things went quickly. The timing was surprising, I didn't expect it and there was no contact beforehand. I assumed that I would continue my career abroad.
  //         The first interview was on Tuesday evening`,
  // },
];

const Twitter = (props) => {
  const [tweetDatabase, setTweetDatabase] = useState(TWITTER__DUMMIY__VALUES);
  const getTweetDataHandler = (data) => {
    setTweetDatabase([data, ...tweetDatabase]);
  };

  return (
    <div>
      <TwitterForm getTweetData={getTweetDataHandler} />
      <div className="Card">
        {/* <TwitterCard tweetData={props.tweetData} />
        <TwitterCard tweetData={props.tweetData} />
        <TwitterCard tweetData={props.tweetData} /> */}
        {tweetDatabase.map((el) => (
          <TwitterCard tweetData={el} />
        ))}
      </div>
    </div>
  );
};

export default Twitter;
