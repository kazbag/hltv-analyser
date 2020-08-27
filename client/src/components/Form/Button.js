import React from "react";

const Button = ({
  text = "Provide text pls",
  type,
  name,
  id,
  addictionalClasses,
  onClick,
}) => (
  <button onClick={onClick} className={`button ${addictionalClasses}`}>
    {text}
  </button>
);

export default Button;
