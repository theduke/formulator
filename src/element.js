import React from "react";
import Formulator from "./formulator";

class Element extends React.Component {
  static childContextTypes = {
    parentElem: React.PropTypes.object
  }

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    autoValidate: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
  }

  static defaultProps = {
    name: "",
    tpl: null,
    autoValidate: true,
    disabled: false,
  }

  constructor(props, context) {
    super(props);

    // If autovalidate is not set explicitly, copy from parent.
    if (!('autoValidate' in props) && 'form' in context) {
      this.props.autoValidate = this.context.props.autoValidate;
    }

    // Determine render function.
    const tpl = props.tpl || this.constructor.name;
    this.renderFunc = Formulator.getTpl(props.tpl || this.constructor.name) || this._render;
    if (!this.renderFunc) {
      throw new Error(`Formulator: Could not determine render function for '${this.constructor.name}' - no _render() func`);
    }

    this.state = {
      status: "new",
      value: props.value
    };
  }

  getChildContext() {
    return {
      parentElem: this
    };
  }

  buildAttributes() {
    return {};
  }

  render() {
    return this.renderFunc(this, this.buildAttributes());
  }
}

export default Element;
