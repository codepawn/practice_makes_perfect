(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.PostsDetailController = RouteController.extend({
  subscriptions: function() {},
  waitOn: function() {
    return Meteor.subscribe('post', this.params._id);
  },
  data: function() {
    return Posts.findOne({
      _id: this.params._id
    });
  },
  action: function() {
    return this.render('PostsDetail', {});
  },
  edit: function() {
    this.state.set('isEditing', true);
    return this.render('PostsDetail', {});
  }
});

})();

//# sourceMappingURL=posts_detail_controller.coffee.js.map
