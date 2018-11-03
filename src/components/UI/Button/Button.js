import React from "react";
import "./Button.css";

const button = props => (
  <button
    disabled={props.disabled}
    className={[props.btnType, "Button"].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
