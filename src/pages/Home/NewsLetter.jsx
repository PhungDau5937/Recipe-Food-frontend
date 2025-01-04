import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full md:w-2/3 mx-auto flex flex-col items-center p-10">
      <h3 className="text-secondary font-semibold text-center text-4xl">
        Sign up for my weekly newsletter!
      </h3>
      <p className="mt-6 text-gray-600 text-lg text-center leading-normal font-light">
        Weekly emails with my latest recipes, cooking tips and tricks and
        product recommendations! <br /> You will be set up in minutes
      </p>

      <div className="mt-6 flex flex-col md:flex-row items-center justify-center w-full md:px-8 gap-4 mb-20">
        <input
          className="flex flex-grow px-4 py-4 rounded-md text-gray-400 outline-none placeholder:text-[#1b2629] w-[80%]"
          type="text"
          placeholder="Name"
        />
        <input
          className="flex flex-grow px-4 py-4 rounded-md text-gray-400 outline-none placeholder:text-[#1b2629] w-[80%]"
          type="text"
          placeholder="Email Address"
        />
        <button className="flex-none rounded-md bg-btnColor px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-btnColor hover:border-btnColor hover:border"
            >
          Get started
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
