import Formulator from "./formulator";
import Element from "./element";
import React from "react";

class Form extends Element {

	static defaultProps = {
		...Element.defaultProps,
		submitBtn: "Submit",
		resetBtn: "Reset",	
	};

	_render() {
		let submit = this.props.submitBtn ? <input type="submit" value={this.props.submitBtn} /> : null;
		let reset = this.props.resetBtn ? <input type="button" value={this.props.resetBtn} /> : null;
		let buttons = (!submit && !reset) ? null : <fieldset>{reset}{submit}</fieldset>;
		let label = this.props.label ? <h3 className="form-label">{this.props.label}</h3> : null;

		return (
			<form>
				{label}
				{this.props.children}
				{buttons}
			</form>
		);
	}
}

export default Form;
