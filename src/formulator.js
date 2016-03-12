import ReactDom from "react-dom";
import React from "react";

import Element from "./element";
import Form from "./form";
import Text from "./fields/text";
import TextArea from "./fields/textarea";
import CheckBox from "./fields/checkbox";
import CheckBoxes from "./fields/checkboxes";
import Radios from "./fields/radios";
import Select from "./fields/select";

import bs4 from "./themes/bs4";

class Formulator {
	themes = {}
	defaultTheme = ""

	registerTheme(name, theme) {
		this.themes[name] = theme;
		if (!this.defaultTheme) {
			this.defaultTheme = name;
		}
	}

	getTheme(name) {
		if (name && !(name in this.themes)) {
			throw new Error(`Formulator: Unknown theme '${name}'`);
		}
		return this.themes[name];
	}

	getTpl(name) {
		if (!this.defaultTheme) return null;
		let theme = this.themes[this.defaultTheme];

		// Check for theme.
		if (name.indexOf(".") != -1) {
			let n = name.substr(0, name.indexOf("."));
			if (n in this.themes) {
				theme = this.themes[n];
				name = name.substr(name.indexOf(".") + 1);
			}
		}

		return theme[name];
	}
}

var formulator = new Formulator();

export {Element, Form, Text};

export default formulator;

window.FormulatorTest = function() {
	formulator.registerTheme("bs4", bs4);

	const options = [
		{value: "a", label: "A"},
		{value: "b", label: "B"},
		{value: "c", label: "C", disabled: true},
		{value: "d", label: "D"},
	];

	ReactDom.render(
		(
			<Form name="bla" label="Form">
				<Text name="test" label="Test" required placeholder="Enter text..." help="Help text" />
				<TextArea name="text" label="Area" />
				<CheckBox name="check" label="Checkbox" value="1" />
				<CheckBoxes name="checks" label="Checks" options={options} />
				<Radios name="radios" label="Radios" options={options} />
				<Select name="select" label="Select" options={options} />
				<Select name="select-multi" label="Select" options={options} multi={true} />
			</Form>
		),
		document.getElementById("test")
	)
}