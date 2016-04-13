import config from './../config/environment';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  host: config.serverURL || ''
});
