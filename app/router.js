import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  
  this.route('projects');
  this.route('project', {path: '/projects/:project_slug'});
});

export default Router;
