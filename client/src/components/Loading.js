import React from "react";

const Loading = ({ message = "Loading..." }) => {
  return <span className="loading">{message}</span>;
};

export default Loading;
