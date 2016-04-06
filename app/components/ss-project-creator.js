import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  isFormShowing: false,

  actions: {
    showForm() {
      this.set('isFormShowing', true);
    },

    hideForm() {
      this.set('isFormShowing', false);
    },

    create() {
      this.get('store').createRecord('project', {
        name: this.get('name')
      });
    }
  }
});
