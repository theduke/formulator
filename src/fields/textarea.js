import React from "react";
import Field from "./field";

class TextArea extends Field {

  _render() {
    const attrs = {
      name: this.props.name,
      disabled: this.props.disabled,
    };
    return (<textarea {...attrs}>{this.state.value}</textarea>);
  }
}
export default TextArea;
