
var Goal = Parse.Object.extend('Goal', {
	defaults: {
		title: 'Untitled',
		description: '',
		childGoals: [],
		primaryMetric: null,
		secondaryMetrics: [],
		owner: null,
		userTimeHours: 1,
		clockTimeHours: 1,
		priority: 1,
	},
});
