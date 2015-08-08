(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',
  subscriptions: function() {
    return this.subscribe('posts');
  },
  action: function() {
    Session.set('pageTitle', 'Home');
    return this.render('Home');
  }
});

})();

//# sourceMappingURL=home_controller.coffee.js.map
