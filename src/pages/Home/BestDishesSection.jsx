import { React, useState } from "react";
import BestDishes1 from "../../assets/BestDishes/thumb1.png";
import BestDishes2 from "../../assets/BestDishes/thumb2.jpg";
import BestDishes3 from "../../assets/BestDishes/thumb3.png";
import BgBestDishes from "../../assets/BestDishes/www3.jpg/";
import RatangleImg from "../../assets/BestDishes/rectangle.png";
import PreviewImg from "../../assets/BestDishes/bestdishesleftarrow.png";
import NextImg from "../../assets/BestDishes/bestdishesrightarrow.png";

const BestDishesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    [
      { id: 1, src: BestDishes1, title: "Pasta Capellini" },
      { id: 2, src: BestDishes2, title: "Pasta Pillus" },
      { id: 3, src: BestDishes3, title: "Pasta Fusilli" },
    ],
    [
      { id: 4, src: BestDishes3, title: "Pasta Capellini" },
      { id: 5, src: BestDishes2, title: "Pasta Pillus" },
      { id: 6, src: BestDishes1, title: "Pasta Fusilli" },
    ],
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    /* ============ Best Dishes ============ */
    <div
      className={`h-[442px] bg-center bg-cover bg-fixed border-t-[3px] border-b-[3px] border-opacity-40 border-t-[rgba(255,153,0,0.2)] border-b-[rgba(255,153,0,0.4)] text-center`}
      style={{ backgroundImage: `url(${BgBestDishes})` }}
    >
      <div id="bestdishes" className="container mx-auto">
        <h2 className="text-white text-[35px] tracking-wider font-economica-bold mt-[30px] relative inline-block">
          <span className="absolute left-[-180px] top-[24px]">
            <img src={RatangleImg} alt="rectangle" />
          </span>
          BEST DISHES
          <span className="absolute right-[-180px] top-[24px]">
            <img src={RatangleImg} alt="rectangle" />
          </span>
        </h2>

        {/* Slide Items */}
        <div className="slider mt-[50px] relative">
          <img
            src={PreviewImg}
            alt="Previous"
            className="prev-button cursor-pointer absolute top-24 left-36"
            onClick={handlePrev}
          />
          <ul className="slides flex items-center justify-center list-none gap-24">
            {slides[currentSlide].map((item) => (
              <li key={item.id} className="slide flex justify-center">
                <div className="item w-full">
                  <img
                    src={item.src}
                    width="226"
                    height="225"
                    alt="sliderimg"
                    className="border-[5px] border-white animate-flipInX"
                  />
                  <h3 className="text-white text-[25px] mt-2">{item.title}</h3>
                </div>
              </li>
            ))}
          </ul>
          <img
            src={NextImg}
            alt="Next"
            className="next-button cursor-pointer absolute top-24 right-36"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>

    /* end of bestdishes wrapper */
  );
};

export default BestDishesSection;
