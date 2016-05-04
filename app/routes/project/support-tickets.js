import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('support-ticket', { filter: { project: params.project_slug } });
  },

  actions: {
    create(newFields) {
      let record = this.store.createRecord('support-ticket', {
        name: newFields.name,
        slug: newFields.description,
        complete: newFields.complete,
        urgent: newFields.urgent
      });

      record.save();
    }
  }
});
