import React from "react";
import Menu from "./Menu";
import general from "./data/general";
import management from "./data/management";

const MenuContainer = () => {
  return (
    <div className="menu-container">
      <Menu title="general" items={general} />
      <Menu title="management" items={management} />
    </div>
  );
};

export default MenuContainer;
