import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doLogin() {
      console.log('clicked');
    }
  },

  model() {
    return {
      email: '',
      password: ''
    };
  }
});
