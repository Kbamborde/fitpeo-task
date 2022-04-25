import React from "react";
import StatComponent from "./Sub-Components/StatComponent";
import data from "./data/data";

const Stats = () => {
  return (
    <div className="stats">
      {data.map((data, index) => {
        return <StatComponent data={data} key={index} />;
      })}
    </div>
  );
};

export default Stats;
