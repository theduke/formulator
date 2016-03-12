import React from "react";
import Field from "./field";

class CheckBox extends Field {

  _render() {
    const attrs = {
      name: this.props.name,
      disabled: this.props.disabled,
      type: "checkbox",
      checked: this.state.value
    };
    return (<input {...attrs} />);
  }

  _renderFieldset(el, content) {
    return (
      <fieldset>
        <div className="checkbox">
          <label>
            {content}
            {el.props.label}
          </label>
        </div>
      </fieldset>
    );
  }

}
export default CheckBox;
