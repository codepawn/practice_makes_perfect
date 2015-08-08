(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.BooksDetail.events({
  'click [name=rm]': function(e) {
    e.preventDefault();
    Books.remove({
      _id: this._id
    });
    return Router.go('books');
  }
});

Template.BooksDetail.helpers;

Template.BooksDetail.created = function() {};

Template.BooksDetail.rendered = function() {};

Template.BooksDetail.destroyed = function() {};

})();
