
var GoalsView = Parse.View.extend({
	tagName: 'ul',
	render: function() {
		_.each(this.collection, function(goal) {
			var goalView = new GoalView({model: goal});
			this.$el.append(goalView.render().el);
		}, this);
		return this;
	},
});
