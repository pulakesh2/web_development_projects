import React, { useContext, useState } from "react";
import Auth from "../Context/Auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const { getUser } = useContext(Auth);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //   submit function-->
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(email, password);
    if (password.length > 6) getUser(email);
    navigate("/interest");
  };
  return (
    // <form onSubmit={submitHandler}>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6 text-center">Please sign up</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={submitHandler}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </form>
  );
};

export default SignUp;
