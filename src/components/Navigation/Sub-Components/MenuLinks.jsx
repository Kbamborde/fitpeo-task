import React from "react";

const MenuLinks = (props) => {
  const { items } = props;

  return (
    <div className="menu-links">
      {items.map((item, index) => {
        return (
          <div className="link" key={index}>
            <div className="icon">{item.label}</div>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};
export default MenuLinks;
