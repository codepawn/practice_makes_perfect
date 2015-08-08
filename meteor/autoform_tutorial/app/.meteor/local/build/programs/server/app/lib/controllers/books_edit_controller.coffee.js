(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.BooksEditController = RouteController.extend({
  subscriptions: function() {},
  waitOn: function() {
    return Meteor.subscribe('book', this.params._id);
  },
  data: function() {
    return Books.findOne({
      _id: this.params._id
    });
  },
  action: function() {
    return this.render('BooksEdit', {});
  },
  home: function() {
    this.state.set('fromHome', true);
    return this.render('BooksEdit', {});
  }
});

})();

//# sourceMappingURL=books_edit_controller.coffee.js.map
