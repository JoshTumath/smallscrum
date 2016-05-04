import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  complete: DS.attr('boolean'),
  urgent: DS.attr('boolean'),
  creationDate: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),

  project: DS.belongsTo('project'),
  user: DS.belongsTo('user')
});
