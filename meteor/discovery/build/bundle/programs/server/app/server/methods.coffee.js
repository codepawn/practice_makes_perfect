(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  postInsert: function(postAttributes) {
    check(Meteor.userId(), String);
    return check(postAttributes, {
      title: String,
      url: String
    });
  }
});

})();

//# sourceMappingURL=methods.coffee.js.map
