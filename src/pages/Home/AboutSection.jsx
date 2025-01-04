import React from "react";
import AboutImg from "../../assets/AboutSectionImg.jpg";

const AboutSection = () => {
  return (
    <div className="overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10">
      <div className="text-start sm:w-1/2">
        <h2 className="text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
          Foodies love to experiment with recipes
        </h2>
        <p className="text-xl mt-4 text-[#5c5c5c] text-justify">
          Foodies delight in experimenting with recipes, blending unique flavors
          and ingredients to craft culinary masterpieces. Their kitchens become
          playgrounds of creativity, turning ordinary dishes into extraordinary
          gastronomic experiences.
          <br /> <br />
          Exploring global cuisines inspires food enthusiasts to push
          boundaries, merging traditional techniques with modern twists. Each
          recipe becomes a journey, celebrating the joy of discovery and the art
          of cooking.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex">
            <button className="py-4 px-8 hover:bg-btnColor text-secondary hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rouned-lg">
              View Recipe
            </button>
          </div>
        </div>
      </div>

      <div>
        <img
          src={AboutImg}
          alt="About image"
          className="rounded-xl"
          width={700}
        />
      </div>
    </div>
  );
};

export default AboutSection;
