import React from "react";

export default function Container({ children }) {
  return (
    <div className="container">
      <div className="form_container">{children}</div>
    </div>
  );
}
