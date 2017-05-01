import QueryManager from 'ember-apollo-client/apollo/query-manager';

export function initialize(application) {
  application.register('object:apollo-query-manager', QueryManager, {
    singleton: false,
  });
}

export default {
  name: 'register-model',
  initialize,
};
