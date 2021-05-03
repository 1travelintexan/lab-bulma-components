import React from "react";

const Formfield = (props) => {
  return (
    <div class="field">
      <label class="label">{props.label}</label>
      <div class="control">
        <input class="input" type={prop.type} placeholder={props.placeholder} />
      </div>
    </div>
  );
};

export default FormField;
