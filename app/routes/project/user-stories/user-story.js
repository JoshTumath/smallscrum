import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.queryRecord('user-story', {slug: params.user_story_id}).then((userStory) => {
      return userStory;
    });
  },
});
