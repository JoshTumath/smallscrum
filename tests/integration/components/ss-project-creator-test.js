import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ss-project-creator', 'Integration | Component | ss project creator', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{ss-project-creator}}`);

  // Get first part of text to see if it contains the title
  assert.ok(this.$().html().trim().indexOf('<button', 0) >= 0);
});
