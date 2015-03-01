import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('task');
  },
  deactivate: function() {
    var model = this.modelFor('tasklist.new');

    if(model.get('isNew')) {
      model.destroyRecord();
    }

    this.controller.resetError();
  }
});
