import React from "react";
import HomeHero from "../components/HomeHero";
// import Profile from "./Profile.tsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import BrandLogos from "../components/BrandLogos";
import PriceRangeSection from "../components/PriceRangeSection";
import BagCategories from "../components/BagCategories";
import OffersForYou from "../components/OffersForYou";

function Home() {
  console.log("home");
  return (
    <div>
      <Navbar />
      <HomeHero />
      <BagCategories />
      <OffersForYou />
      <PriceRangeSection />
      <BrandLogos />
      <Explore />
      <Footer />
    </div>
  );
}

export default Home;
