define('angkor/tests/acceptance/list-rentals-test', ['qunit', 'angkor/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | list rentals');

  (0, _qunit.test)('visiting /list-rentals', function (assert) {
    visit('/list-rentals');

    andThen(function () {
      assert.equal(currentURL(), '/list-rentals');
    });
  });
});