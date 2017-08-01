module.exports = {
	'extends': [
		'eslint-config-airbnb',
		'eslint-config-902labs/rules/overrides',
		'./rules/overrides'
	].map(require.resolve),
	rules: {}
};
