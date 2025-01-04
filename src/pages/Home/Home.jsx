import React from "react";
import Hero from "../../components/Hero";
import CategoryWrapper from "../Category/CategoryWrapper";
import FeaturedSection from "./FeaturedSection";
import BestDishesSection from "./BestDishesSection";
import NewsLetter from "./NewsLetter";
import AboutSection from "./AboutSection";
import CompanyLogo from "./CompanyLogo";
import Subcription from "./Subcription";

const Home = () => {
  return (
    <div className="container mx-auto pb-10">
      <div className="flex flex-col justify-center items-center w-full">
        <Hero />
        <CategoryWrapper />
      </div>

      <div className="mt-10">
        <BestDishesSection />
      </div>

      <div className="mt-10">
        <FeaturedSection />
      </div>

      <div className="">
        <NewsLetter />
      </div>

      <div className="">
        <AboutSection/>
      </div>

      <div className="">
        <CompanyLogo />
      </div>

      <div className="">
        <Subcription />
      </div>
    </div>
  );
};

export default Home;
