import DS from 'ember-data';

export default DS.Model.extend({
  _id: DS.attr('number'),
  name: DS.attr('string')
});
