import React from "react";

const Input = ({ type = "text", name, placeholder, label }) => (
  <div className="input__box">
    {label && (
      <label className="label input__label" htmlFor={name}>
        {label}
      </label>
    )}
    <input
      className="input input__input"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  </div>
);

export default Input;
