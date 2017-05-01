import Ember from 'ember';
import QueryManager from 'ember-apollo-client/apollo/query-manager';

const { getOwner, Mixin } = Ember;

export default Mixin.create({
  apollo: null,

  init() {
    this._super(...arguments);
    let owner = getOwner(this);

    // I think this is necessary in order to make this register properly when used in
    // unit or integration tests, but I'm not sure it's the right way to solve it.
    if (!owner.hasRegistration('object:apollo-query-manager')) {
      owner.register('object:apollo-query-manager', QueryManager, {
        singleton: false,
      });
    }

    let queryManager = owner.lookup('object:apollo-query-manager');
    this.set('apollo', queryManager);
  },
});
