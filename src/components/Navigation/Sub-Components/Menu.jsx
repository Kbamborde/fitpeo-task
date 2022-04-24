import React from "react";
import MenuLinks from "./MenuLinks";

const Menu = (props) => {
  const { title, items } = props;
  return (
    <div className="menu">
      <h6>{title}</h6>
      {items && <MenuLinks items={items} />}
    </div>
  );
};

export default Menu;
