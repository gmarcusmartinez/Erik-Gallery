import React from "react";

export const renderModalCloseBtn = (bool: boolean, cb: Function) => (
  <div className="modal__close-btn" onClick={() => cb(false)}>
    <div className={`modal__bar ${bool ? "cross" : ""}`}></div>
    <div className={`modal__bar ${bool ? "cross" : ""}`}></div>
    <div className={`modal__bar ${bool ? "cross" : ""}`}></div>
  </div>
);
