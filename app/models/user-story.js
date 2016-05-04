import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  acceptanceCriteria: DS.attr('string'),
  complete: DS.attr('boolean'),
  project: DS.belongsTo('project')
});
