import React from "react";
import Options from "./options";

class Select extends Options {

  static defaultProps = {
    ...Options.defaultProps,
    empty: "",
  }

  _renderWrapper(el, options) {
    const attrs = {
      value: el.props.multi ? el.state.value : el.state.value[0],
      name: el.props.name,
      multiple: el.props.multi
    };
    let empty = null;
    if (!el.props.multi && el.props.empty !== false) {
      empty = <option value="">{el.props.empty}</option>;
    }
    return <select {...attrs}>{empty}{options}</select>
  }

  _renderOption(el, option, enabled) {
    const attrs = {
      key: option.value,
      value: option.value,
      disabled: el.props.disabled || option.disabled,
    };
    return <option {...attrs}>{option.label}</option>;
  }  
}
export default Select;
