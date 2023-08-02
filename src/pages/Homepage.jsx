import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Features from "../components/Features";
import KorpriSection from "../components/KorpriSection";
import Footer from "../components/Footer";
import NewArrivalSection from "../components/NewArrivalSection";
import ServicesSection from "../components/ServicesSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Features />
      <KorpriSection />
      <NewArrivalSection />
      <ServicesSection />
      <Footer />
    </>
  );
};

export default HomePage;
