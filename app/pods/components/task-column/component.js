import Ember from 'ember';

export default Ember.Component.extend({
  list: null, // pass in
  status: null, // pass in,
  filteredList: function() {
    var list = this.get('list');
    var status = this.get('status');

    return list.filterBy('status', status);
  }.property('list'),
  statusClassName: function() {
    return this.get('status').replace(/ /g,'-');
  }.property('status'),
  classNames: ['task-column'],
  classNameBindings: ['statusClassName']
});
