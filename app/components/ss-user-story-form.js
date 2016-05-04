import Ember from 'ember';

export default Ember.Component.extend({
  isFormShowing: false,
  userStory: null,
  formData: {},

  didReceiveAttrs() {
    this._super(...arguments);

    // If the component has a model passed into it, then this form is for
    // editing a new project rather than creating one
    if (this.get('userStory')) {
      // We must make a copy of the model being passed into the component so
      // that data will not be shared
      this.set('id', this.get('userStory.id'));
      this.set('formData.name', this.get('userStory.name'));
      this.set('formData.acceptanceCriteria', this.get('userStory.acceptanceCriteria'));
      this.set('formData.complete', this.get('userStory.complete'));
    } else {
      this.set('userStory', null);
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
      if (this.get('userStory') === null) {
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
