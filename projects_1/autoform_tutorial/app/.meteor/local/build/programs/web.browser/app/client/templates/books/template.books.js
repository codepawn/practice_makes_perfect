(function(){
Template.__checkName("Books");
Template["Books"] = new Template("Template.Books", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      collection: Spacebars.call("Books"),
      id: Spacebars.call("insertPostForm"),
      type: Spacebars.call("insert")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("quickForm"));
  }), "\n\n  ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("books"));
  }, function() {
    return [ "\n    ", HTML.DIV("\n      ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "books.detail");
      }
    }, "\n        ", Blaze.View("lookup:_id", function() {
      return Spacebars.mustache(view.lookup("_id"));
    }), " ", Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    }), " ", Blaze.View("lookup:author", function() {
      return Spacebars.mustache(view.lookup("author"));
    }), " ", Blaze.View("lookup:copies", function() {
      return Spacebars.mustache(view.lookup("copies"));
    }), " ", Blaze.View("lookup:lastCheckedOut", function() {
      return Spacebars.mustache(view.lookup("lastCheckedOut"));
    }), " ", Blaze.View("lookup:summary", function() {
      return Spacebars.mustache(view.lookup("summary"));
    }), "\n      "), "\n      ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "books.edit");
      },
      name: "",
      "class": "btn"
    }, "edit"), "\n      ", HTML.A({
      href: "#",
      name: "rm",
      "class": "btn"
    }, "rm"), "\n    "), "\n  " ];
  }) ];
}));

})();
