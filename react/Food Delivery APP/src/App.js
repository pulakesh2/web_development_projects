// import Header from "./Components/Layout/Header/Header";
import Header from "./Components/Layout/Header/Header";
import Navigation from "./Components/Layout/Navigation/Navigation";
import Meals from "./Components/Meals/Meals";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Header />
      <Meals />
    </React.Fragment>
  );
}

export default App;
