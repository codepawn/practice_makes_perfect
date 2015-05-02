(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',
  subscriptions: function() {},
  waitOn: function() {
    return Meteor.subscribe('posts');
  },
  action: function() {
    return this.render('Home');
  }
});

})();

//# sourceMappingURL=home_controller.coffee.js.map
