import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.queryRecord('project', {
      filter: { slug: params.project_slug }
    }).then((project) => {
      return project[0];
    });
  },

  afterModel(model) {
    // Don't allow the user on the page if a model has not been found
    if (!model) {
      this.transitionTo('page-not-found');
    }
  },

  actions: {
    navigateUp() {
      this.transitionTo('projects');
    },

    update(id, newFields) {
      this.store.findRecord('project', id)

      .then((record) => {
        record.set('name', newFields.name);
        record.set('slug', newFields.slug);

        record.save();
      });
    },

    delete(id) {
      this.store.findRecord('project', id)

      .then((record) => {
        return record.destroyRecord();
      })

      .then(() => {
        this.send('navigateUp');
      });
    }
  }
});
