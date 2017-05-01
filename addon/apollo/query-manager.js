import Ember from 'ember';

const { A, inject: { service }, Object: EmberObject } = Ember;

export default EmberObject.extend({
  apollo: service(),

  activeSubscriptions: null,
  queries: null,

  init() {
    this._super(...arguments);
    this.set('activeSubscriptions', A([]));
    this.set('queries', A([]));
  },

  mutate(opts) {
    return this.get('apollo').mutate(opts);
  },

  watchQuery(opts, resultKey) {
    return this.get('apollo').managedWatchQuery(opts, resultKey, this);
  },

  unsubscribeAll() {
    let subscriptions = this.get('activeSubscriptions');
    subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
    this.set('activeSubscriptions', A([]));
    this.set('queries', A([]));
  },
});
