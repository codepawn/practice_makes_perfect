(function(){
Template.__checkName("PostsDetail");
Template["PostsDetail"] = new Template("Template.PostsDetail", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("get"), "isEditing");
  }, function() {
    return [ "\n    ", Blaze._TemplateWith(function() {
      return {
        collection: Spacebars.call("Posts"),
        id: Spacebars.call("updatePostForm"),
        type: Spacebars.call("update"),
        doc: Spacebars.call(view.lookup("."))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("quickForm"));
    }), "\n    ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "posts.detail");
      }
    }, "Cancel"), "\n  " ];
  }, function() {
    return [ "\n    ", HTML.DIV("\n      ", HTML.DIV(Blaze.View("lookup:_id", function() {
      return Spacebars.mustache(view.lookup("_id"));
    })), "\n      ", HTML.DIV(Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    })), "\n      ", HTML.DIV(Blaze.View("lookup:content", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("content")));
    })), "\n      ", HTML.DIV(Blaze.View("lookup:createdAt", function() {
      return Spacebars.mustache(view.lookup("createdAt"));
    })), "\n      ", HTML.DIV("\n        ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "posts.edit");
      }
    }, "Edit"), "\n      "), "\n      ", HTML.DIV("\n        ", HTML.A({
      href: "#",
      name: "removePosts"
    }, "Remove"), "\n      "), "\n    "), "\n\n    ", HTML.FORM({
      action: ""
    }, "\n      ", HTML.TEXTAREA({
      "class": "form-control",
      name: "comment",
      id: "",
      cols: "30",
      rows: "10"
    }), "\n      ", HTML.BUTTON({
      name: "insert",
      "class": "btn btn-default"
    }, "Insert"), "\n    "), "\n\n    ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("postComments"));
    }, function() {
      return [ "\n      ", HTML.DIV(Blaze.View("lookup:comments", function() {
        return Spacebars.mustache(view.lookup("comments"));
      }), "\n        ", HTML.BUTTON({
        "class": "btn btn-default",
        name: "removeComment"
      }, "rm"), "\n      "), "\n    " ];
    }), "\n  " ];
  });
}));

})();
