import Ember from 'ember';

export default Ember.Component.extend({
  isFormShowing: false,
  user: null,
  formData: {},

  didReceiveAttrs() {
    this._super(...arguments);

    // If the component has a model passed into it, then this form is for
    // editing a new project rather than creating one
    if (this.get('user')) {
      // We must make a copy of the model being passed into the component so
      // that data will not be shared
      this.set('id', this.get('user.id'));
      this.set('formData.email', this.get('user.email'));
      this.set('formData.password', this.get('user.password'));
      this.set('formData.firstName', this.get('user.firstName'));
      this.set('formData.lastName', this.get('user.lastName'));
    } else {
      this.set('user', null);
    }
  },

  actions: {
    showForm() {
      this.set('isFormShowing', true);
    },

    hideForm() {
      this.set('isFormShowing', false);
    },

    submitForm() {
      if (this.get('user') === null) {
        // Bubble up to projects route
        this.send('create', this.get('formData'));
        this.send('hideForm');
      } else {
        // Bubble up to project route
        this.send('update', this.get('id'), this.get('formData'));
        this.send('hideForm');
      }
    },

    deleteButton() {
      // Bubble up to project route
      this.send('delete', this.get('id'));
    }
  }
});
