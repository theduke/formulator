
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

export default new Formulator();
