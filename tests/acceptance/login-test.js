import { test } from 'qunit';
import moduleForAcceptance from 'smallscrum/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visiting /login', function (assert) {
  visit('/login');

  andThen(function () {
    assert.equal(currentURL(), '/login');
  });
});

/*test('redirecting to /login from homepage if not logged in', function (assert) {
  visit('/');

  andThen(function () {
    assert.equal(currentURL(), '/login');
  });
});*/

test('successful login', function (assert) {
  visit('/login');
  fillIn('input[type="email"]', 'test@example.com');
  fillIn('input[type="password"]', 'password');
  click('button');

  andThen(function () {
    // XXX: In future, this will need to be changed to the actual homepage that
    // gets used. Probably /projects
    assert.equal(currentURL(), '/');
  });
});

test('unsuccessful login with incorrect email', function (assert) {
  visit('/login');
  fillIn('input[type="email"]', 'not@real.fake');
  fillIn('input[type="password"]', 'nope');
  click('button');

  andThen(function () {
    assert.equal(currentURL(), '/login');
    // XXX: Need additional check that user is not logged in once this feature
    // is more fleshed out.
  });
});

test('unsuccessful login with incorrect password', function (assert) {
  visit('/login');
  fillIn('input[type="email"]', 'test@example.com');
  fillIn('input[type="password"]', 'nope');
  click('button');

  andThen(function () {
    assert.equal(currentURL(), '/login');
    // XXX: Need additional check that user is not logged in once this feature
    // is more fleshed out.
  });
});
