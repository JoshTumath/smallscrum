import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),

  projects: DS.hasMany('project'),
  supportTickets: DS.hasMany('support-ticket')
});
