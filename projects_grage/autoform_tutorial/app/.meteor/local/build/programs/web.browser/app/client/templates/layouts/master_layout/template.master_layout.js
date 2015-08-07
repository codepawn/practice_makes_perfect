(function(){
Template.__checkName("MasterLayout");
Template["MasterLayout"] = new Template("Template.MasterLayout", (function() {
  var view = this;
  return HTML.DIV({
    "class": "container"
  }, "\n    ", HTML.UL({
    "class": "nav nav-tabs"
  }, "\n      ", HTML.LI({
    role: "presentation",
    "class": ""
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "home");
    }
  }, "Home")), "\n      ", HTML.LI({
    role: "presentation"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "books");
    }
  }, "Books")), "\n      ", HTML.LI({
    role: "presentation"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "profile");
    }
  }, "Profile")), "\n      ", HTML.LI({
    role: "presentation"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "object");
    }
  }, "Object")), "\n      ", Blaze._TemplateWith(function() {
    return {
      align: Spacebars.call("")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("loginButtons"));
  }), "\n    "), "\n    ", Spacebars.include(view.lookupTemplate("yield")), "\n  ");
}));

})();
