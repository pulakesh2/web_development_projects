import React from "react";
import { Link, useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <p>{error.data || error.message}</p>
      <Link to="/">Return Home</Link>
    </div>
  );
};

export default Error;
