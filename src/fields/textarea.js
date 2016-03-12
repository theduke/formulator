import React from "react";
import Field from "./field";

class TextArea extends Field {

	buildAttributes() {
		return {
      name: this.props.name,
      disabled: this.props.disabled,
    };
	}

  _render(el, attrs) {
    return (<textarea {...attrs}>{this.state.value}</textarea>);
  }
}
export default TextArea;
