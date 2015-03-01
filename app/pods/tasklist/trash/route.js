import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('task', {status: 'removed'});
  },
  actions: {
    clearTrash: function() {
      this.modelFor('tasklist.trash').forEach(function(task){
        task.destroyRecord();
      });
    }
  }
});
