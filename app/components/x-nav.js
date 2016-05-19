import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['navbar-fixed', 'x-nav'],

  didInsertElement() {
    this._super(...arguments);

    this.$('a.button-collapse')
      .attr('data-activates', this.get('_sideNavId'));

    // Initialize the sideNav
    this.$(".button-collapse").sideNav({
      closeOnClick: true
    });

    // Initialize all dropdowns menus within the menu
    this.$(".dropdown-button").dropdown();
  },

  _setupChildComponent(child) {
    if (child.classNames.indexOf('side-nav') >= 0) {
      this.set('_sideNavId', child.elementId);
    }
  }
});
