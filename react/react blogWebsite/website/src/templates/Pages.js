import HeroSection from "./../templates/frontTemplates/Hero Section/Hero";
import IntroByMe from "./../templates/frontTemplates/IntroByMe/IntroByMe";
import Powers from "./../templates/frontTemplates/Power Section/Powers";
import FooterIntro from "./../templates/frontTemplates/Footer Intro/FooterIntro";
import Quote from "./../templates/frontTemplates/Quote Section/Quote";
import Footer from "./../templates/frontTemplates/Footer/Footer";

import React from "react";

const Pages = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <IntroByMe />
      <Powers />
      <FooterIntro />
      <Quote />
      <Footer />
    </React.Fragment>
  );
};

export default Pages;
