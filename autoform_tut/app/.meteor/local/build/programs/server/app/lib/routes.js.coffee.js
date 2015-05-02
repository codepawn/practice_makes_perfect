(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.map(function() {
  this.route('/', {
    name: 'home',
    controller: 'HomeController',
    action: 'action',
    where: 'client'
  });
  this.route('/posts/:_id', {
    name: 'posts.detail',
    controller: 'PostsDetailController',
    action: 'action',
    where: 'client'
  });
  this.route('/posts/:_id/edit', {
    name: 'posts.edit',
    controller: 'PostsDetailController',
    action: 'edit',
    where: 'client'
  });
  this.route('books', {
    name: 'books',
    controller: 'BooksController',
    action: 'action',
    where: 'client'
  });
  this.route('/books/:_id', {
    name: 'books.detail',
    controller: 'BooksDetailController',
    action: 'action',
    where: 'client'
  });
  return this.route('/books/:_id/edit', {
    name: 'books.edit',
    controller: 'BooksEditController',
    action: 'action',
    where: 'client'
  });
});

Router.route('profile', {
  name: 'profile',
  controller: 'ProfileController',
  action: 'action',
  where: 'client'
});

Router.route('object', {
  name: 'object',
  controller: 'ObjectController',
  action: 'action',
  where: 'client'
});

})();

//# sourceMappingURL=routes.js.coffee.js.map
