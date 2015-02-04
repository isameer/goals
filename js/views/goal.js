
var GoalView = Parse.View.extend({
	tagName: 'li',
	attributes: function() {
		color = '0xEC663C';
		color = '#' + (parseInt(color) - (20*this.model.attributes.priority)).toString(16);
		return {'data-row': 1, 'data-col': '1', 'data-sizex': 2 * this.model.attributes.priority, 'data-sizey': '2', 'style': 'background-color:' + color};
	},
	template: _.template($('#goal-template').html()),
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
});
