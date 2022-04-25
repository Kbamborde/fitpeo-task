import React from "react";
import TopHeader from "./Sub-Components/TopHeader";
import BottomHeader from "./Sub-Components/BottomHeader";

const Header = () => {
  return (
    <header className="header">
      <TopHeader />
      <BottomHeader />
    </header>
  );
};

export default Header;
