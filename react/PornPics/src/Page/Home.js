import { useState } from "react";
import CartList from "../Components/Cart/CartList";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  const [userInput, setUserInput] = useState("");
  const getUserInput = (data) => {
    setUserInput(data);
  };
  return (
    <div>
      <Navbar getUserData={getUserInput} />
      <CartList userData={userInput} />
      <Footer />
    </div>
  );
};

export default Home;
