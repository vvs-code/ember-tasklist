import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

// based on https://github.com/ember-cli/ember-cli/pull/1439#issuecomment-50027971
var CustomResolver = Resolver.extend({
  // add a new function to use in the lookup paths (can be first/last/wherever)
  moduleNameLookupPatterns: Ember.computed(function(){
    var arr = this._super();
    arr.unshift(this.handleArbitraryTemplateInPodFormat);
    return arr;
  }),

  // load any template/partial in my pods
  handleArbitraryTemplateInPodFormat: function(parsedName) {
    var podPrefix = this.namespace.podModulePrefix || this.namespace.modulePrefix;

    var fullNameWithoutType = parsedName.fullNameWithoutType;

    if (parsedName.type === 'template') {
      fullNameWithoutType = fullNameWithoutType.replace(/^components\//, '');
    }

    return podPrefix + '/' + fullNameWithoutType;
  }
});

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: CustomResolver
});

loadInitializers(App, config.modulePrefix);

export default App;
