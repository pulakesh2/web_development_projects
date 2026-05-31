import React from "react";
import Header from "../UI/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../UI/Footer";
import Loader from "../UI/Loader";

const AppLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header />
      {navigation.state === "loading" ? <Loader /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default AppLayout;
