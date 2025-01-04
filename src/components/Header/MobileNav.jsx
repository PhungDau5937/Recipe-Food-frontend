import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiFillCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

const MobileNav = ({ menuItems, logo, onClose, hideLeft, onOpen }) => {
  return (
    <div className="h-20 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={logo} alt="logo" width={100} height={100} />
      </a>

      {/* Button Open menu */}
      <button onClick={onOpen} className="border border-primary rounded">
        <RiMenu3Fill className="w-7 h-7" />
      </button>

      {/* Button Close menu */}
      <div
        className={`transition-all w-full h-full bg-primary z-50 top-0 ${hideLeft} fixed flex justify-center items-center`}
      >
        <button onClick={onClose} className="absolute right-8 top-32">
          <AiFillCloseSquare className="w-7 h-7" />
        </button>

        {/* Menu Items */}
        <div>
          <ul className="flex flex-col gap-5">
            {menuItems?.map((menu, indexMenu) => (
              <li key={indexMenu}>
                <Link
                  to={menu}
                  className="font-medium capitalize text-secondary text-2xl"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>

          {/* Login and Sign Up */}
          <ul className="flex items-center gap-4 font-medium mt-10">
            <li>
              <button className="text-secondary px-4 py-2 rounded border">
                Login
              </button>
            </li>
            <li>
              <button className="text-secondary px-4 py-2 rounded border">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
