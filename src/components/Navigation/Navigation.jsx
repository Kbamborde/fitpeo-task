import React from "react";

/* Importing Navigation Styles */
import "./Navigation Styles/Navigation.css";

/* Importing Navbrand Component */
import Navbrand from "./Sub-Components/Navbrand";
/* Importing CurrentUser Component */
import CurrentUser from "./Sub-Components/CurrentUser";
/* Importing MenuContainer Component */
import MenuContainer from "./Sub-Components/MenuContainer";

const Navigation = () => {
  return (
    <section className="navigation">
      <Navbrand />
      <CurrentUser />
      <MenuContainer />
    </section>
  );
};

export default Navigation;
