(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.InsertPostController = RouteController.extend({
  subscriptions: function() {},
  data: function() {},
  action: function() {
    Session.set('pageTitle', 'Insert');
    return this.render('InsertPost', {});
  }
});

})();

//# sourceMappingURL=insert_post_controller.coffee.js.map
