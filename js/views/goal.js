
var GoalView = Parse.View.extend({
	tagName: 'li',
	template: _.template($('#goal-template').html()),
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
});
