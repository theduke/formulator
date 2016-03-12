import React from "react";

export default {
  Fieldset: function(el, content) {
    let cls = ["form-group"];
    if (el.state.status === "valid") {
      cls.push("has-success");
    } else if (el.state.status === "invalid") {
      cls.push("has-danger");
    }
    let label = null;
    if (el.props.label) {
      label = <label>{el.props.label}{el.props.required ? "*" : null}</label>;
    }
    let help = el.props.help ? <small className="text-muted">{el.props.help}</small> : null;
    return <fieldset className={cls}>{label}{content}{help}</fieldset>
  }
  
  Text: function(el, content) {

  }
};

