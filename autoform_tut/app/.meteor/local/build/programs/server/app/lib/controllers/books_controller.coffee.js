(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.BooksController = RouteController.extend({
  subscriptions: function() {},
  waitOn: function() {
    return Meteor.subscribe('books');
  },
  data: function() {},
  action: function() {
    return this.render('Books', {});
  }
});

})();

//# sourceMappingURL=books_controller.coffee.js.map
