import React from "react";

const CustomRadio = ({ children, label }) => (
  <div className="radio__container">
    <label className="label radio__label">{label}</label>
    {children}
    <span className="radio__checkmark"></span>
  </div>
);

export default CustomRadio;
