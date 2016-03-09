import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ss-project-listing', 'Integration | Component | ss project listing', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{ss-project-listing}}`);

  // Get first part of text to see if it contains the title
  assert.ok(this.$().html().trim().indexOf('<strong', 0) >= 0);
});

test('data is entered correctly', function(assert) {
  assert.expect(2);

  this.set('project', {
    'id': 1,
    'name': 'Foobar',
    'slug': 'foobar'
  });
  this.render(hbs`{{ss-project-listing project}}`);

  assert.ok(this.$().text().indexOf('Foobar', 0) >= 0);
  assert.ok(this.$('a'));
});
