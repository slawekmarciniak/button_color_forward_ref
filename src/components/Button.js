import React from "react";

const Button = React.forwardRef((props, ref) => {
  return (
    <button
      onMouseOver={props.addColor}
      onMouseOut={props.removeColor}
      ref={ref}
      type="button"
      className="btn btn-warning btn-lg"
    >
      {props.children}
    </button>
  );
});

export default Button;
