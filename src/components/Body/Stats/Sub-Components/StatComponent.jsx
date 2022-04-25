import React from "react";
import { BsGraphUp } from "react-icons/bs";

const StatComponent = (props) => {
  const { data } = props;
  return (
    <div className="stat">
      <div className="left-info">
        <h2>{data.title}</h2>
        <div className={data.profit.includes("-") ? "red icon" : "green icon"}>
          {data.icon}
          <span>{data.profit}%</span>
        </div>
        <h1>{data.count}</h1>
      </div>
      <div className="right-graph">{data.svg}</div>
    </div>
  );
};

export default StatComponent;
