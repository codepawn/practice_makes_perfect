(function(){
Template.__checkName("BooksEdit");
Template["BooksEdit"] = new Template("Template.BooksEdit", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      collection: Spacebars.call("Books"),
      id: Spacebars.call("updatePostForm"),
      type: Spacebars.call("update"),
      doc: Spacebars.call(view.lookup("."))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("quickForm"));
  }), "\n\n  ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("get"), "fromHome");
  }, function() {
    return [ "\n    ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "books.detail");
      }
    }, "Cancel"), "\n  " ];
  }, function() {
    return [ "\n    ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "books");
      }
    }, "Cancel"), "\n  " ];
  }) ];
}));

})();
