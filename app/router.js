import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');

  this.route('projects');
  this.route('project', { path: '/projects/:project_slug' }, function() {
    this.route('user-stories', function() {
      this.route('user-story', { path: '/:user_story_id' });
    });
    this.route('support-tickets', function() {
      this.route('support-ticket', { path: '/:support_ticket_id' });
    });
  });

  this.route('page-not-found', { path: '/*wildcard' });
});

export default Router;
