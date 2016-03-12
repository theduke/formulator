import React from "react";
import Formulator from "../formulator";
import Field from "./field";

class Options extends Field {
  static propTypes = {
    ...Field.propTypes,
    multi: React.PropTypes.bool,
    options: React.PropTypes.arrayOf(React.PropTypes.shape({
      value: React.PropTypes.string.isRequired,
      label: React.PropTypes.string.isRequired,
      disabled: React.PropTypes.bool,
    }).isRequired).isRequired,
  }

  static defaultProps = {
    ...Field.defaultProps,
    multi: false,
    value: [],

    wrapperTpl: null,
    optionTpl: null,
  }

  constructor(props, context) {
    super(props, context);

    // Determine wrapper tpl.
    let tpl = props.wrapperTpl || this.constructor.name + "Wrapper";
    this.wrapperRenderFunc = Formulator.getTpl(tpl) || this._renderWrapper;
    if (!this.wrapperRenderFunc) {
      throw new Error("Formulator: Could not determine wrapper render function for " + this.constructor.name);
    }

    // Determine option tpl.
    tpl = props.optionTpl || this.constructor.name + "Option";
    this.optionRenderFunc = Formulator.getTpl(tpl) || this._renderOption;
    if (!this.optionRenderFunc) {
      throw new Error("Formulator: Could not determine option render function for " + this.constructor.name);
    }
  }

  _render(el, attrs) {
    const options = this.props.options || [];
    let renderedOptions = options.map((option) => {
      return this.optionRenderFunc(this, option, this.state.value.indexOf(option.value) !== -1);
    });
    return this.wrapperRenderFunc(this, renderedOptions, attrs);
  }
}
export default Options;
