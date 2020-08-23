import React, { useEffect, useState } from "react";

const Modal = ({
  title = "No modal title provided",
  description = "No modal description provided",
  duration = 3000,
}) => {
  return (
    <div className="modal">
      <h3 className="heading heading-3 modal__heading">{title}</h3>
      <p className="paragraph modal__paragraph">{description}</p>
    </div>
  );
};

export default Modal;
