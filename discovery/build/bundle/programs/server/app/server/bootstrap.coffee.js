(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.startup(function() {
  var i, _i, _results;
  if (Posts.find().count() === 0) {
    _results = [];
    for (i = _i = 1; _i <= 4; i = ++_i) {
      Posts.insert({
        title: "Introducing Telescope " + i,
        url: "http://sachagreif.com/introducing-telescope/"
      });
      Posts.insert({
        title: "Meteor " + i,
        url: "http://meteor.com"
      });
      _results.push(Posts.insert({
        title: "The Meteor Book " + i,
        url: "http://themeteorbook.com"
      }));
    }
    return _results;
  }
});

})();

//# sourceMappingURL=bootstrap.coffee.js.map
