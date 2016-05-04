import Ember from 'ember';

export default Ember.Component.extend({
  isFormShowing: false,
  supportTicket: null,
  formData: {},

  didReceiveAttrs() {
    this._super(...arguments);

    // If the component has a model passed into it, then this form is for
    // editing a new project rather than creating one
    if (this.get('supportTicket')) {
      // We must make a copy of the model being passed into the component so
      // that data will not be shared
      this.set('id', this.get('supportTicket.id'));
      this.set('formData.name', this.get('supportTicket.name'));
      this.set('formData.description', this.get('supportTicket.description'));
      this.set('formData.complete', this.get('supportTicket.complete'));
      this.set('formData.urgent', this.get('supportTicket.urgent'));
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

    submitForm() {
      if (this.get('supportTicket') === null) {
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
