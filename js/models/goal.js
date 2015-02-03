
var Goal = Parse.Object.extend('Goal', {
	defaults: {
		title: 'Untitled',
		description: '',
		childGoals: [],
		primaryMetric: null,
		secondaryMetrics: [],
		owner: null,
	},
});
