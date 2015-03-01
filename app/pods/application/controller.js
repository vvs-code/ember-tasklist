import Ember from 'ember';

export default Ember.ArrayController.extend({
  removedTasks: function() {
    var model = this.get('model');
    var removedList = model.filterBy('status', 'removed');

    return removedList.length;
  }.property('model.@each.status')
});
