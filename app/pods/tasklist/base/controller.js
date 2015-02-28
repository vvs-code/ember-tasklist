import Ember from 'ember';

export default Ember.Controller.extend({
  taskStatuses: ['new', 'in process', 'done'],
  isValid: Ember.computed.notEmpty('model.title'),
  actions: {
    save: function() {
      if(this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function() {
          _this.transitionToRoute('tasklist');
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
      return false;
    }
  }
});
