(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  onBeforeAction: function() {
    if (!Meteor.user()) {
      if (Meteor.loggingIn()) {
        return this.render(this.Loading);
      } else {
        return this.render('AccessDenied');
      }
    } else {
      return this.next();
    }
  }
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('posts/:_id', {
  name: 'posts.detail',
  controller: 'PostsController',
  action: 'action',
  where: 'client'
});

Router.route('insert_post', {
  name: 'insertPost',
  controller: 'InsertPostController',
  action: 'action',
  where: 'client'
});

Router.route('edit_post/:_id', {
  name: 'editPost',
  controller: 'PostsController',
  action: 'edit',
  where: 'client'
});

})();

//# sourceMappingURL=routes.js.coffee.js.map
