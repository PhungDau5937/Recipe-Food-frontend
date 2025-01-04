import React from "react";
import FeaturedImg from "../../assets/FeaturedSection.png";

const FeaturedSection = () => {
  return (
    <div className="overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10">
      <div className="relative">
        <div className="absolute mt-4 left-5 bg-white text-secondary px-3 py-1 rounded-md uppercase tracking-wider">
          Featured Recipe
        </div>
        <img
          src={FeaturedImg}
          alt="Featured image"
          className="rounded-md"
          width={700}
        />
      </div>

      <div className="text-start sm:w-1/2">
        <h2 className="text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
          Vietnamese Braised Pork Belly with Eggs
        </h2>
        <p className="text-xl mt-4 text-[#5c5c5c] text-justify">
          This classic and easy dish is often served at special occasions or
          family meals. It is a flavorful combination of caramelized pork belly
          and hard-boiled eggs simmered in a sweet and salty coconut milk sauce.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex">
            <button className="py-4 px-8 hover:bg-btnColor text-secondary hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rouned-lg">
              View Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
