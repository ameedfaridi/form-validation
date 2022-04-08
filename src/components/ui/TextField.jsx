import React from "react";

export default function TextField({ label, setState, state, error, ...props }) {
  return (
    <div className="textField_container">
      <label>{label}</label>
      <input
        {...props}
        onChange={({ target: { value } }) => setState(value)}
        value={state}
      />
      {!error?.isValid && <label className="error">{error?.errorMsg}</label>}
    </div>
  );
}
