import Formulator from "./formulator";

class Element {
	static defaultProps = {
		tpl: null,
		label: null,
		autoValidate: true,
		help: ""
	}

	constructor(props) {
		super(props);

		// If autovalidate is not set explicitly, copy from parent.
		if (!('autoValidate' in props) && 'form' in this.context) {
			this.props.autoValidate = this.context.props.autoValidate;
		}

		// Determine render function.
		const renderFunc = Formulator.getTpl(props.tpl) || this._render;
		if (!renderFunc) {
			throw new Error(`Formulator: Could not determine render function for '${this.constructor.name}' - no _render() func`);
		}
		this.renderFunc = renderFunc.bind(this);

		this.state = {
			isValid: null,
			value: null
		};
	}

	render() {
		return this.renderFunc();
	}
}

class Form extends Element {

	_render() {
		return (
			<form>
				{this.props.children}
			</form>
		);
	}
}

export default Form;
