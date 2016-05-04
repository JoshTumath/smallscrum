import { moduleForModel, test } from 'ember-qunit';

moduleForModel('support-ticket', 'Unit | Model | support ticket', {
  // Specify the other units that are required for this test.
  needs: ['model:project', 'model:user']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
