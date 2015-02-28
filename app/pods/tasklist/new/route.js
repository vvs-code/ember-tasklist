import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('task');
  },
  actions: {
    cancel: function() {
      this.transitionTo('tasklist');
      return false;
    }
  },
  deactivate: function() {
    var model = this.modelFor('tasklist/new');

    if(model.get('isNew')) {
      model.destroy();
    }
  }
});
