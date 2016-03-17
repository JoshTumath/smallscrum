import Ember from 'ember';

const Component = Ember.Component.extend({
});

Component.reopenClass({
  positionalParams: ['project']
});

export default Component;
