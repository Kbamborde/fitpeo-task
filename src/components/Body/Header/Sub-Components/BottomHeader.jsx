import React from "react";
import dashboard from "./dashboard.png";
import {
  IoChevronBackCircleSharp,
  IoChevronForwardCircleSharp,
} from "react-icons/io5";

const BottomHeader = () => {
  return (
    <div className="bottom-header">
      <div className="left-card">
        <div className="information">
          <h2>
            Welcome back, <br />
            Minimal UI!
          </h2>
          <p>
            If you are going to use a passage of Lorem Ipsum, you <br /> need to
            be sure there isn't anything
          </p>
          <button>Go Now</button>
        </div>
        <div className="image">
          <img src={dashboard} alt="" width={"200px"} />
        </div>
      </div>

      <div className="right-card">
        <div className="top-section">
          <div className="pointers">
            <span></span>
            <span className="active"></span>
            <span></span>
          </div>

          <div className="chevrons">
            <IoChevronBackCircleSharp />
            <IoChevronForwardCircleSharp />
          </div>
        </div>

        <div className="bottom-section">
          <h2>featured app</h2>
          <h1>disney zombies 2</h1>
          <p>Believing these 7 myths about event keeps...</p>
        </div>
      </div>
    </div>
  );
};
export default BottomHeader;
