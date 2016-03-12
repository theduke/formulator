import React from "react";
import Options from "./options";

class Radios extends Options {

  _renderWrapper(el, options) {
    return <div className="radios">{options}</div>
  }

  _renderOption(el, option, enabled) {
    const attrs = {
      name: el.props.name,
      value: option.value,
      disabled: el.props.disabled || option.disabled,
      type: "radio",
      checked: enabled,
    };
    return <div key={option.value} className="radio"><label><input {...attrs} />{option.label}</label></div>
  }
}
export default Radios;
