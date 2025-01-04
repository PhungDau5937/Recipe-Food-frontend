import React from "react";
import { Link } from "react-router-dom";

const DesktopNav = ({ menuItems, logo }) => {
  return (
    <div className="h-20 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={logo} alt="logo" width={100} height={100}/>
      </a>
      <ul className="flex gap-7">
        {menuItems?.map((menu, indexMenu) => (
          <li key={indexMenu}>
            <Link to={menu} className="font-medium capitalize text-secondary">
              {menu}
            </Link>
          </li>
        ))}
      </ul>

      {/* Login and Sign Up */}
      <ul className="flex items-center gap-4 font-medium">
        <li>
            <button className="text-secondary px-4 py-2 rounded">Login</button>
        </li>
        <li><button className="text-secondary px-4 py-2 rounded">Sign Up</button></li>
      </ul>
    </div>
  );
};

export default DesktopNav;
