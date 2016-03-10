import Ember from 'ember';

const Component = Ember.Component.extend({
});

Component.reopenClass({
  positionalParams: ['user-story']
});

export default Component;
