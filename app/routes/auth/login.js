import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  actions: {
    doLogin() {
      const user = this.get('currentModel');

      this.get('session')
        .authenticate('authenticator:peepchat', user.email, user.password)
        .then(() => {
          this.get('flashMessages').success('Logged in!');
        })
        .catch(({errors}) => {
          if (errors.mapBy('code').indexOf(401) >= 0) {
            this.get('flashMessages').danger('Try again, idiot!');
          } else {
            this.get('flashMessages').danger('Server fail');
          }
        });
    }
  },

  model() {
    return {
      email: '',
      password: ''
    };
  }
});
