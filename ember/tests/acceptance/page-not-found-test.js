import { test } from 'qunit';
import moduleForAcceptance from 'smallscrum/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | page not found');

test('visiting non-existant URL', function(assert) {
  visit('/jhkljhlkjkljlkjkljlkj');

  andThen(function() {
    assert.equal(find('p').text(), 'The page you requested does not exist.');
  });
});
