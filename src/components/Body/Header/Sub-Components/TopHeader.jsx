import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import uk from "./uk.png";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="search">
        <div className="search-icon">
          <BiSearch />
        </div>
        <input type="text" autoComplete="off" placeholder="Search..." />
      </div>

      <div className="right-info">
        <div className="flag">
          <img src={uk} alt="flag.png" />
        </div>

        <div className="notifications">
          <div className="bell-icon">
            <IoMdNotificationsOutline />
          </div>

          <span>2</span>
        </div>

        <div className="users">
          <FaUsers />
        </div>

        <div className="user-icon">
          <img
            src="https://randomuser.me/api/portraits/men/86.jpg"
            alt="user.png"
          />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
