import React from "react";
import "./SingleProduct.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  const item = useLoaderData();
  console.log("item: ", item);

  const extractNumber = (tiemString) => {
    let timeArray = tiemString.split(" ");
    return parseInt(timeArray[0]);
  };

  let prepTime = extractNumber(item?.more[0].prep_time);
  let cookTime = extractNumber(item?.more[0].cook_time);
  const TotalTime = prepTime + cookTime;

  //Instroduciton
  const instructionsData = item?.instructions;

  // Split the string by the pattern `number. ` using a regular expression
  const stepsIntroductionData = instructionsData.split(/(?=\d\.\s)/);

  return (
    <div className="singleItem">
      <input type="checkbox" id="checkbox-cover" />
      <input type="checkbox" id="checkbox-page1" />
      <input type="checkbox" id="checkbox-page2" />
      <input type="checkbox" id="checkbox-page3" />
      <div className="book">
        <div className="cover">
          <label htmlFor="checkbox-cover"></label>
        </div>
        <div className="page" id="page1">
          <div className="front-page">
            <div className="">
              <img src={item?.thumbnail_image} />
              <h3 className="flex justify-center mt-5 text-secondary text-2xl font-bold">{item?.name}</h3>
              <article className="bg-white p-3 rounded-lg">
                <h2 className="text-lg font-semibold mt-2 ml-2">Nutrition:</h2>
                <ul className="list-disc mt-2 ml-8 text-sm marker:text-orange-500">
                  <li className="pl-3">
                    <p className="flex justify-between">
                      <span>Calories:</span>
                      <p>277<span className="font-bold"> kcal</span></p>
                    </p>
                  </li>
                  <li className="pl-3">
                    <p className="flex justify-between">
                      <span>Carbs:</span>
                      <p>0<span className="font-bold"> g</span></p>
                    </p>
                  </li>
                  <li className="pl-3">
                    <p className="flex justify-between">
                      <span>Protein:</span>
                      <p>20<span className="font-bold"> g</span></p>
                    </p>
                  </li>
                  <li className="pl-3">
                    <p className="flex justify-between">
                      <span>Fat:</span>
                      <p>22<span className="font-bold"> g</span></p>
                    </p>
                  </li>
                </ul>
              </article>
            </div>

            <label className="next" htmlFor="checkbox-page1">
              <MdOutlineNavigateNext size={40} />
            </label>
          </div>
          <div className="back-page flex">
            <div className="mt-5 px-5 rounded-xl h-[55%]">
              <img src={item.thumbnail_image} alt="" />
              <article className="bg-rose-50 mt-5 p-3 rounded-xl">
                <h2 className="text-md font-semibold ml-2">Preparation time</h2>
                <ul className="list-disc mt-3 ml-8 text-sm marker:text-orange-500">
                  <li className="pl-3">
                    <p>
                      <span>Total:</span>
                      <span> {TotalTime} minutes</span>
                    </p>
                  </li>
                  <li className="pl-3 mt-1">
                    <p>
                      <span>Preparation:</span>
                      <span> {item?.more[0].prep_time}</span>
                    </p>
                  </li>
                  <li className="pl-3 mt-1">
                    <p>
                      <span>Cooking:</span>
                      <span> {item?.more[0].cook_time}</span>
                    </p>
                  </li>
                </ul>
              </article>
              <label className="prev" htmlFor="checkbox-page1">
                <GrFormPrevious size={40} />
              </label>
            </div>
          </div>
        </div>
        <div className="page" id="page2">
          <div className="front-page">
            <div className="mt-32 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold ml-2">Ingredient:</h3>
              <ul className="list-disc marker:text-blue-500 mt-4 ml-24 text-secondary marker:algin-middle">
                {item?.ingredients.map((ingredient, index) => (
                  <li key={index} className="pl-4 mt-2">
                    <span>{ingredient?.name}:</span>
                    <span> {ingredient?.quantity}.</span>
                  </li>
                ))}
              </ul>
            </div>
            <label className="next" htmlFor="checkbox-page2">
              <MdOutlineNavigateNext size={40} />
            </label>
          </div>
          <div className="back-page">
            <div className="mt-5 px-5 rounded-xl h-[85%]">
              <img src={item.thumbnail_image} alt="" />
              <label className="prev" htmlFor="checkbox-page2">
                <GrFormPrevious size={40} />
              </label>
            </div>
          </div>
        </div>
        <div className="page" id="page3">
          <div className="front-page">
            <div className="mt-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold ml-2">Instructions:</h3>
              <ul className="mt-4 ml-2 text-secondary marker:algin-middle">
                {stepsIntroductionData.map((instroduciton, index) => (
                  <li key={index} className="pl-4 mt-2">
                    <span>{instroduciton.trim()}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="back-cover"></div>
      </div>
    </div>
  );
};

export default SingleProduct;
