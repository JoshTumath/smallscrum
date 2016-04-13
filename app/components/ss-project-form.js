import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  isFormShowing: false,
  project: null,

  didReceiveAttrs() {
    this._super(...arguments);

    // If the component has a model passed into it, then this form is for
    // editing a new project rather than creating one
    if (this.get('project')) {
      // We must make a copy of the model being passed into the component so
      // that data will not be shared
      this.set('name', this.get('project.name'));
    } else {
      this.set('project', null);
    }
  },

  actions: {
    showForm() {
      this.set('isFormShowing', true);
    },

    hideForm() {
      this.set('isFormShowing', false);
    },

    submit() {
      if (this.get('project') === null) {
        // Create
        let record = this.get('store').createRecord('project', {
          name: this.get('name')
        });

        record.save()
        .then(() => {
          this.send('hideForm');
        });
      } else {
        // Edit
        this.get('store').findRecord('project', this.get('project.id'))
        .then((record) => {
          record.set('name', this.get('name'));

          return record.save();
        }).then(() => {
          this.hideForm();
        });
      }
    }
  }
});
