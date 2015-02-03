
var Metric = Parse.Object.extend('Metric', {
	defaults: {
		measurements: [],
		higherIsBetter: True,
		target: null,
		quantity: null,
	},
});

