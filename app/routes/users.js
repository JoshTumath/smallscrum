import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },

  actions: {
    create(newFields) {
      let record = this.store.createRecord('user', {
        email: newFields.email,
        password: newFields.password,
        firstName: newFields.firstName,
        lastName: newFields.lastName
      });

      record.save();
    }
  }
});
