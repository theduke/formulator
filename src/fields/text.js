import React from "react";
import Field from "./field";

class Text extends Field {

  static defaultProps = {
    ...Field.defaultProps,
    type: "text",
    placeholder: "",
  }

  buildAttributes() {
    return {
      name: this.props.name,
      disabled: this.props.disabled,
      placeholder: this.props.placeholder,
      value: this.state.value,
    };
  }

  _render(el, attrs) {
    return (<input {...attrs} />);
  }
}
export default Text;
