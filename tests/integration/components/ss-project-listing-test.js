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
  assert.expect(1);

  this.set('model', this.store().findRecord('project', 1));
  this.render(hbs`{{ss-project-listing project}}`);

  assert.ok(this.$().text().indexOf('Cardigan Bay Holiday Homes', 0) >= 0);
});
