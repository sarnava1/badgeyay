import Route from '@ember/routing/route';

import Ember from 'ember';

const { set } = Ember;

export default Route.extend({
  beforeModel(transition) {
    this._super(...arguments);
  },

  model(params) {
    let filter = {};
    this.set('params', params);
    filter.state = 'all';
    filter.page = params.page;
    return this.get('store').query('my-badges', filter);
  }
});
