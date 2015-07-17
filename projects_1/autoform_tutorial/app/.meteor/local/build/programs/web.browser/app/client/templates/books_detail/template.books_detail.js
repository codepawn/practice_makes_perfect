(function(){
Template.__checkName("BooksDetail");
Template["BooksDetail"] = new Template("Template.BooksDetail", (function() {
  var view = this;
  return HTML.DIV("\n    ", Blaze.View("lookup:_id", function() {
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
  }), HTML.Raw('\n    <!--<a href="{{pathFor \'books.edit.home\'}}" class="btn" name="edit">Edit</a>-->\n    <a href="#" class="btn" name="rm">rm</a>\n  '));
}));

})();
