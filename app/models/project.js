import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),

  supportTickets: DS.hasMany('support-ticket'),
  userStories: DS.hasMany('user-story')
});
