import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.findAll('project');
  },

  actions: {
    create(newFields) {
      let record = this.store.createRecord('project', {
        name: newFields.name,
        slug: newFields.slug
      });

      record.save();
    }
  }
});
