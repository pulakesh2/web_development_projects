import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  // state Management--> here useState<type>(); just like we assigned in typescript
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //   const submitHandler = async (e:React.FormEvent<HTMLFormElement>){
  //     e.preventDefault();
  //   }

  // submitHandler function--> here event: React.FormEvent<HTMLFormElement> is used to bring the preventDefault function ( we use in form event )
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    //
    event.preventDefault();
    setIsLoading(true);
    try {
      // this fn is for signUp for new user ( built in fun for firebase ) it takes three para -> auth , email and password ( here we take the data from user and pass it when form is submitted )
      await createUserWithEmailAndPassword(auth, email, password);
      // when sign up is completed then we will go to '/' ( main page )
      navigate("/");
      setIsLoading(false);
    } catch (error) {
      // if some error then we store it in error state-->
      setError(error.message);
    }
  };

  // We paste this form using daisy UI -->
  return (
    <form onSubmit={submitHandler}>
      {/* if error is there we show error to the page */}
      {error && error}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="py-6">Share images to the world...</p>
          </div>
          <div className="card sm:w-[30rem] shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  {isLoading ? "Loading..." : "Sign Up"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
