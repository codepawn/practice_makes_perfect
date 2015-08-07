(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.Books.events({
  'click [name=rm]': function() {
    return Books.remove({
      _id: this._id
    });
  }
});

Template.Books.helpers({
  books: function() {
    return Books.find();
  }
});

Template.Books.created = function() {};

Template.Books.rendered = function() {};

Template.Books.destroyed = function() {};

})();
