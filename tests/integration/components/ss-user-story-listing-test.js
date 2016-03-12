import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ss-user-story-listing', 'Integration | Component | ss user story listing', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{ss-user-story-listing}}`);

  // Get first part of text to see if it contains the title
  assert.ok(this.$().html().trim().indexOf('<strong', 0) >= 0);
});

test('data is entered correctly', function(assert) {
  assert.expect(1);

  this.set('user-story', {
    'id': 1,
    'name': 'Foobar'
  });
  this.render(hbs`{{ss-user-story-listing user-story}}`);

  assert.ok(this.$().text().indexOf('Foobar', 0) >= 0);
  //assert.ok(this.$('a'));
});
