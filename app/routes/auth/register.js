import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doRegister() {
      console.log(this.get('model'));
    }
  },
  model() {
    return this.store.createRecord('user');
  }
});
