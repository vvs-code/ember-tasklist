import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tasklist', {path: '/'}, function() {
    this.route('new');
    this.route('view', { path: ':task_id/view' });
    this.route('edit', { path: ':task_id/edit' });
    this.route('trash', {path: '/trash'});
  });
});

export default Router;
