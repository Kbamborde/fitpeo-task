import React from "react";

const CurrentUser = () => {
  return (
    <div className="currentUser">
      <div className="icon">
        <img
          src="https://randomuser.me/api/portraits/men/86.jpg"
          alt="user.png"
        />
      </div>

      <div className="info">
        <h4>Minimal UI</h4>
        <p>admin</p>
      </div>
    </div>
  );
};

export default CurrentUser;
