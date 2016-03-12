import React from "react";
import Field from "./field";

class Text extends Field {

  static defaultProps = {
    ...Field.defaultProps,
    type: "text",
    placeholder: "",
  }

  _render() {
    const attrs = {
      name: this.props.name,
      disabled: this.props.disabled,
      placeholder: this.props.placeholder,
      value: this.state.value,
    };
    return (<input {...attrs} />);
  }
}
export default Text;
