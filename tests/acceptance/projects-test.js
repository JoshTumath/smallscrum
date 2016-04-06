import { test } from 'qunit';
import { authenticateSession } from 'smallscrum/tests/helpers/ember-simple-auth';
import moduleForAcceptance from 'smallscrum/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | projects');

test('visiting /projects', function (assert) {
  visit('/projects');

  andThen(function () {
    assert.equal(currentURL(), '/login');
  });
});

test('visiting /projects logged in', function (assert) {
  authenticateSession(this.application, 'foo');
  visit('/projects');

  andThen(function () {
    assert.equal(currentURL(), '/projects');
  });
});

test('viewing projects', function (assert) {
  authenticateSession(this.application, 'foo');
  visit('/projects');
  
  click('.btn-create-project');
  fillIn('input[id$="-name"]', 'Foo');
  click('.btn-create-project-submit');

  andThen(function () {
    assert.ok(find('li:last-child').text().indexOf('Foo', 0));
  });
});
