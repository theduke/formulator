import React from "react";
import Formulator from "../formulator";
import Element from "../element";

class Field extends Element {

  static propTypes = {
    ...Element.propTypes,
    fieldset: React.PropTypes.bool,
    label: React.PropTypes.string,
    required: React.PropTypes.bool,
    help: React.PropTypes.string,
  }

  static defaultProps = {
    ...Element.defaultProps,
    fieldset: true,
    label: null,
    required: false,
    help: null,
    fieldsetTpl : "Fieldset",
  }

  constructor(props, context) {
    super(props, context);

    // Determine fieldset render function.
    this.fieldsetRenderFunc = null;
    if (props.fieldset === true) {
      this.fieldsetRenderFunc = Formulator.getTpl(this.props.fieldsetTpl) || this._renderFieldset;
    } else if (typeof props.fieldset === "function") {
      this.fieldsetRenderFunc = this.props.fieldset;
    }
  }

  _renderFieldset(el, content) {
    let label = null;
    if (el.props.label) {
      label = <label>{el.props.label}{el.props.required ? "*" : null}</label>;
    }
    return (
      <fieldset>
        {label}
        {content}
      </fieldset>
    );
  }

  render() {
    let content = this.renderFunc(this, this.buildAttribtes());
    if (this.fieldsetRenderFunc) {
      content = this.fieldsetRenderFunc(this, content); 
    }
    return content;
  }
}

export default Field;
