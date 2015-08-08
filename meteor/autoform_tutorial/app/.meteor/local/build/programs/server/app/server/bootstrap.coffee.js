(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.startup(function() {
  var i, _i, _j, _results;
  if (Posts.find().count() === 0) {
    for (i = _i = 1; _i <= 5; i = ++_i) {
      Posts.insert({
        title: "posts " + i,
        content: "number " + i
      });
    }
  }
  if (Books.find().count() === 0) {
    _results = [];
    for (i = _j = 1; _j <= 5; i = ++_j) {
      _results.push(Books.insert({
        title: "asf " + i,
        author: "awefewa",
        copies: "" + i,
        lastCheckedOut: new Date,
        summary: "aewf" + i
      }));
    }
    return _results;
  }
});

})();

//# sourceMappingURL=bootstrap.coffee.js.map
