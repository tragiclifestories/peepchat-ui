import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    doRegister() {
      this.get('currentModel').save()
        .then(() => {
          this.transitionTo('auth.login');

          this.get('flashMessages').success('Sign in, bastard');
        })
        .catch(({ errors }) => {
          this.get('flashMessages')
            .danger(errors.mapBy('detail').join(', '));
        });
    }
  },
  model() {
    return this.store.createRecord('user');
  }
});
