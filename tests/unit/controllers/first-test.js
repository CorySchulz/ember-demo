import { module, test } from 'qunit';
import { setupTest } from 'ember-demo/tests/helpers';

module('Unit | Controller | first', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:first');
    assert.ok(controller);
  });
});
