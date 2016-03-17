import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ss-login-form', 'Integration | Component | ss login form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{ss-login-form}}`);

  // Get first part of text to see if it contains a form opening tag
  assert.ok(this.$().html().trim().indexOf('<form', 0) >= 0);

  // Template block usage:"
  this.render(hbs`
    {{#ss-login-form}}
      template block text
    {{/ss-login-form}}
  `);

  assert.ok(this.$().text().indexOf('template block text', 0) >= 0);
});
