import React from "react";

function Button({ type = "default", onClick, className, children}) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
