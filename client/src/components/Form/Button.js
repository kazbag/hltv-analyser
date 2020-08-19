import React from "react";

const Button = ({ type = "submit", name, text = "Please, fill me" }) => (
  <button type={type} name={name} className="button form__button">
    {text}
  </button>
);

export default Button;
