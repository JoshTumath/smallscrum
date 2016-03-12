import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('user-story', { filter: { project: params.project_slug } });
  }
});
