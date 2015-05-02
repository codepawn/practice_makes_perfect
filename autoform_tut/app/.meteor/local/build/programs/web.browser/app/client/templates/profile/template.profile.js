(function(){
Template.__checkName("Profile");
Template["Profile"] = new Template("Template.Profile", (function() {
  var view = this;
  return [ HTML.Raw("<h1>Find me in app/client/templates/profile/profile</h1>\n  "), Blaze._TemplateWith(function() {
    return {
      collection: Spacebars.call("Profile"),
      id: Spacebars.call("insertPostForm"),
      type: Spacebars.call("insert")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("quickForm"));
  }) ];
}));

})();
