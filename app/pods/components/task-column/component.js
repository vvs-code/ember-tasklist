import Ember from 'ember';

export default Ember.Component.extend({
  list: null, // pass in
  status: null, // pass in,
  filteredList: function() {
    var list = this.get('list');
    var status = this.get('status');

    console.log('refilter');
    return list.filterBy('status', status);
  }.property('list.@each.status'),
  statusClassName: function() {
    return this.get('status').replace(/ /g,'-');
  }.property('status'),
  classNames: ['task-column'],
  classNameBindings: ['statusClassName'],
  actions: {
    onDropTask: function(obj) {
      var task = obj.model;
      task.set('status', this.get('status'));
      task.save();
    }
  }
});
