import React from "react";

const ErrorMessage = ({ message = "Error", type }) => {
  return <label className={`error error--${type}`}>{message}</label>;
};

export default ErrorMessage;
