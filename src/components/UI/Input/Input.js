import React from "react";
import "./Input.css";

const input = props => {
  let inputElement = null;
  const inputClasses = ["Input"];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push("Invalid");
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className="InputElement"
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.option.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className="InputElement"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className="InputElement"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
