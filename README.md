[![npm version](https://badge.fury.io/js/eslint-config-902labs.svg)](https://badge.fury.io/js/eslint-config-902labs)
[![npm version](https://badge.fury.io/js/eslint-config-902labs-react.svg)](https://badge.fury.io/js/eslint-config-902labs-react)

## 902 Labs Javascript Standards

linting rules based off of [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb-base)

## Node eslint

`npm install eslint-config-902labs --save-dev`

## React eslint

`npm install eslint-config-902labs-react --save-dev`

## Example usage

.eslintrs.js

```
const rules = require('eslint-config-902labs-react/rules/overrides').rules;

const baseDevDepAllowances = rules['import/no-extraneous-dependencies'][1].devDependencies;

module.exports = {
	root: true,
	parser: 'babel-eslint',
	extends: [
		'902labs-react',
		'plugin:jsx-control-statements/recommended'
	],
	plugins: [
		'jsx-control-statements'
	],
	// FIXME: Move this into common lint library
	rules: {
	},
	env: {
		es6: true,
		mocha: true,
		node: true
	}
};
```
