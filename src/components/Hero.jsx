import React, { useState, useEffect } from "react";
import ImgSlide1 from "../assets/Slides/passta.png";
import ImgSlide2 from "../assets/Slides/beefsteak.jpg";
import ImgSlide3 from "../assets/Slides/pizza.jpg";
import ArrowLeft from "../assets/Slides/arrowleft.png";
import ArrowRight from "../assets/Slides/arrowright.png";
import { IoSearch } from "react-icons/io5";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "What is Pasta ?",
      description: `Pasta is a type of Italian food made from unleavened dough, typically consisting of durum wheat flour and water. It can be shaped into various forms, such as long strands (like spaghetti), tubes (like penne), or stuffed (like ravioli). Pasta is typically boiled in water and is often served with sauces, such as marinara, pesto, or cream-based sauces. It is a staple in Italian cuisine and has become popular worldwide in a variety of dishes.`,
      image: ImgSlide1,
      alt: "slide1img",
    },
    {
      title: "What is Beef Steak ?",
      description: `A beef steak is a cut of beef that is typically sliced across the muscle fibers, often from the rib, loin, or round of the cow. It is usually cooked by grilling, broiling, pan-frying, or roasting, depending on the desired doneness. Beef steaks are known for their tender texture and rich flavor, with popular varieties including ribeye, sirloin, filet mignon, T-bone, and New York strip. The cooking process can range from rare to well-done, and it is commonly seasoned with salt, pepper, or marinades before cooking. Beef steaks are often served with sides like vegetables, potatoes, or sauces.`,
      image: ImgSlide2,
      alt: "slideimg2",
    },
    {
      title: "What is Pizza ?",
      description: `Pizza is a popular Italian dish that consists of a round, flat base made from dough, typically topped with tomato sauce, cheese, and various ingredients like meats, vegetables, or seafood. The dough is usually baked in an oven, resulting in a crispy crust with melted cheese and flavorful toppings. There are many variations of pizza, with different regional styles and toppings, such as the classic Margherita, pepperoni, or veggie pizza. Over time, pizza has gained worldwide popularity and has become a beloved fast food item, with many people enjoying it for its versatility and delicious taste.`,
      image: ImgSlide3,
      alt: "slideimg3",
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(autoSlide);
  }, [totalSlides]);

  const moveSlide = (direction) => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + direction + totalSlides) % totalSlides
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* Title */}
      <div className="font-serif px-5 xl:px-10 md:w-1/2">
        <h1 className="mt-6 mb-10 text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center font-bold text-[#2A3342] leading-normal md:leading-relaxed lg:leading-relaxed xl:leading-relaxed xl:whitespace-nowrap">
          Blog made for
          <span className="text-orange-400"> Food</span>
        </h1>
      </div>

      {/* Slides */}
      <div className="sliderwrapper mt-8 w-[90%] mx-auto">
        <div id="slider" className="mx-auto">
          <div className="relative w-full xl:h-[420px] overflow-hidden">
            <ul
              className="text-justify flex h-[80%] transition-transform duration-[1500ms] ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <li
                  key={index}
                  className="slide flex-shrink-0 w-full h-full px-5"
                >
                  <h5 className="text-[#cf0f1e] font-bold text-[24px] md:text-[34px] lg:text-[34px] xl:text-[34px] mb-4 ml-10">
                    {slide.title}
                  </h5>
                  <p className="text-[#454242] font-bold text-[18px] leading-[2em] md:w-[90%] lg:w-[450px] xl:w-[580px] float-left ml-10 mr-10 sm:mr-10 md:mr-0 lg:mr-0 xl:mr-0">
                    {slide.description}
                  </p>

                  <img
                    src={slide.image}
                    width="317"
                    height="256"
                    className="rounded-[50px] mt-8 lg:mt-10 xl:mt-0 w-[80%] lg:w-[38%] xl:w-auto float-right mr-8 sm:mr-[50px] md:mr-[60px] lg:mr-[30px] xl:mr-[45px]"
                    alt={slide.alt}
                  />
                </li>
              ))}
            </ul>

            {/* Slider Navigation Arrows */}
            <button
              className="absolute bottom-[50%] lg:bottom-[45%] left-0 p-5"
              onClick={() => moveSlide(-1)}
            >
              <img src={ArrowLeft} alt="Arrow Left" className="w-6 h-6" />
            </button>
            <button
              className="absolute bottom-[50%] lg:bottom-[45%] right-0 p-5"
              onClick={() => moveSlide(1)}
            >
              <img src={ArrowRight} alt="Arrow Right" className="w-6 h-6" />
            </button>

            {/* Slider Dots Navigation */}
            <div className="absolute bottom-2 md:bottom-2 lg:bottom-0 xl:bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center space-x-3">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full ${
                    currentSlide === index ? "bg-[#ff5a0b]" : "bg-[#d21d2c]"
                  } hover:bg-[#ff5a0b]`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* -----Search Form----- */}
      <div className="font-serif px-5 xl:px-10 md:w-1/2 mb-10 mx-auto mt-10">
        <form
          action="/search"
          className="bg-white p-4 rounded-3xl relative flex items-center"
        >
          <IoSearch className="w-5 h-5 mr-2 text-neutral-300" />
          <input
            className="outline-none w-full placeholder:text-[#1b2629]"
            id="search"
            name="query"
            type="search"
            placeholder="Search for a recipe"
            required=""
          />
        </form>
      </div>
    </>
  );
};

export default Slider;
