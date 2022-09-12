import { module, test } from 'qunit';
import { setupTest } from 'ember-demo/tests/helpers';

module('Unit | Route | third', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:third');
    assert.ok(route);
  });
});
