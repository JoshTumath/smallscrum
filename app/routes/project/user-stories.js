import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('user-story', { filter: { project: params.project_slug } });
  },

  actions: {
    create(newFields) {
      let record = this.store.createRecord('user-story', {
        name: newFields.name,
        slug: newFields.acceptanceCriteria,
        complete: newFields.complete
      });

      record.save();
    }
  }
});
