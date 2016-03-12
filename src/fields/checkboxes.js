import React from "react";
import Options from "./options";

class CheckBoxes extends Options {

  static defaultProps = {
    ...Options.defaultProps,
    multi: true
  };

  _renderWrapper(el, options) {
    return <div className="checkboxes">{options}</div>
  }

  _renderOption(el, option, enabled) {
    const attrs = {
      name: el.props.name,
      value: option.value,
      disabled: el.props.disabled || option.disabled,
      type: "checkbox",
      checked: enabled,
    };
    return <div key={option.value} className="checkbox"><label><input {...attrs} />{option.label}</label></div>
  }
}
export default CheckBoxes;
