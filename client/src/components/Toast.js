import React from "react";

const Toast = ({ toastVisible, message = "default text" }) => {
  if (toastVisible) {
    return <div className="toast">{message}</div>;
  } else {
    return <></>;
  }
};

export default Toast;
