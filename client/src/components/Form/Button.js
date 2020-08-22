import React from "react";

const Button = ({
  type = "submit",
  name,
  text = "Please, fill me",
  style,
  onClick,
}) => (
  <button
    type={type}
    name={name}
    className={`button form__button `}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
