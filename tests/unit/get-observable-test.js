import EmberObject from '@ember/object';
import { getObservable } from 'ember-apollo-client';
import { module, test } from 'qunit';

module('Unit | getObservable');

test('it should return the observable from a result object', function(assert) {
  let mockObservable = { fakeObservable: true }
  let resultObject = EmberObject.create({ _apolloObservable: mockObservable })

  let result = getObservable(resultObject);
  assert.deepEqual(result, mockObservable);
});
