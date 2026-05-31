import NavBar from "./components/NavBar/NavBar";
import FirstSubheading from "./components/SubHeading/FirstSubheading";
import HeroSection from "./components/Hero Section/HeroSection";
import Recharge from "./components/Recharge Component/Recharge";
import Buy from "./components/Buy Component/Buy";
import Payment from "./components/Payment Component/Payment";
import CreditCard from "./components/CreditCard Component/CreditCard";
import FinancialService from "./components/FinancialService Component/FinancialService";
import BuisnessService from "./components/BuisnessService Component/BuisnessService";
import BuisnessTool from "./components/BuisnessTool Component/BuinessTool";
import PaytmMoney from "./components/PaytmTool Component/PaytmMoney";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <FirstSubheading />
      <HeroSection />
      <Recharge />
      <Buy />
      <Payment />
      <CreditCard />
      <FinancialService />
      <BuisnessService />
      <BuisnessTool />
      <PaytmMoney />
    </React.Fragment>
  );
}

export default App;
