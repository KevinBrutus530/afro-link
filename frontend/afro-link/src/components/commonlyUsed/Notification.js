import React from "react";
import "../../css/Notification.css";

const Notification = ({ message }) => {
  return (
    <div className="notification">
      <p>{message ? message : null}</p>
    </div>
  );
};

export default Notification;
