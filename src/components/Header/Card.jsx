import React from "react";
import { Link } from "react-router-dom";
import { LuClock } from "react-icons/lu";

const Card = ({ item }) => {
  const categoryStyles = {
    Entrees: { backgroundColor: "#f0f5c4", color: "#59871f" },
    Breakfast: { backgroundColor: "#efedfa", color: "#59871f" },
    Lunch: { backgroundColor: "#e5f7f3", color: "#59871f" },
    Desserts: { backgroundColor: "#e8f5fa", color: "#59871f" },
    Sides: { backgroundColor: "#feefc9", color: "#59871f" },
    Drinks: { backgroundColor: "#ffeae3", color: "#59871f" },
    default: { backgroundColor: "#fff", color: "#000" },
  };

  const getCategoryStyle = (category) => {
    return categoryStyles[category] || categoryStyles.default;
  };

  const categoryStyle = getCategoryStyle(item?.category);

  return (
    <div className="container mx-auto flex justify-center md:justify-start">
      <div className="max-w-sm">
        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
          <Link to={`/items/${item._id}`}>
            <img
              src={item?.thumbnail_image}
              alt="thumbnail_image"
              className="rounded-t-lg"
            />
          </Link>

          <div className="py-6 px-5 rounded-lg bg-white">
            <Link to={`/items/${item._id}`}>
              <h1 className="text-gray-700 font-bold text-2xl mb-8 hover:text-gray-900 hover:cursor-pointer">
                {item?.name}
              </h1>
            </Link>

            {/* category and reading time */}
            <div className="flex justify-between items-center flex-wrap">
              <button
                className={`mt-6 py-2 px-4 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300`}
                style={{
                  backgroundColor: categoryStyle.backgroundColor,
                  color: categoryStyle.color,
                }}
              >
                {item?.category}
              </button>

              <div className="flex items-center py-2 mt-6">
                <LuClock />
                {console.log(item?.more[0])}
                <span className="ml-1">{item?.more[0].prep_time}</span>
              </div>
            </div>
          </div>

          <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
            <span className="font-medium text-black">
              {item?.more[0].difficulty}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
