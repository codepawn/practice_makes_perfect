(function(){
Template.__checkName("Home");
Template["Home"] = new Template("Template.Home", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      collection: Spacebars.call("Posts"),
      id: Spacebars.call("insertPostForm"),
      type: Spacebars.call("insert")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("quickForm"));
  }), "\n\n  ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("posts"));
  }, function() {
    return [ "\n    ", HTML.DIV("\n      ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "posts.detail");
      }
    }, Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    }), " ", Blaze.View("lookup:content", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("content")));
    })), "\n      ", HTML.A({
      "class": "btn",
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "posts.edit");
      }
    }, "Edit"), "\n      ", HTML.A({
      href: "#",
      name: "remove"
    }, "Remove"), "\n    "), "\n  " ];
  }) ];
}));

})();
