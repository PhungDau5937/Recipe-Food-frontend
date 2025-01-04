import React, { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from './MobileNav';
import Logo from "../../assets/LogoRecipeFood.png";

const Header = () => {
  const [hideLeft, setHideLeft] = useState("-left-[1000px");
  const menuItems = ["recipes", "resources", "about", "contact"];

  const onOpen = () => {
    setHideLeft("left-0");
  };
  const onClose = () => {
    setHideLeft("-left-[1000px]");
  };
  return (
    <>
      <div className="max-[900px]:hidden">
        <DesktopNav menuItems={menuItems} logo={Logo} />
      </div>
      <div className="min-[900px]:hidden">
        <MobileNav
          menuItems={menuItems}
          logo={Logo}
          onClose={onClose}
          hideLeft={hideLeft}
          onOpen={onOpen}
        />
      </div>
    </>
  );
};

export default Header;
