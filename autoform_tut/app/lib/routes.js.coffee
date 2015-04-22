Router.configure
  layoutTemplate: 'MasterLayout'
  loadingTemplate: 'Loading'
  notFoundTemplate: 'NotFound'

Router.map ->
  @route '/',
    name: 'home'
    controller: 'HomeController'
    action: 'action'
    where: 'client'

  @route '/posts/:_id',
    name: 'posts.detail'
    controller: 'PostsDetailController'
    action: 'action'
    where: 'client'

  @route '/posts/:_id/edit',
    name: 'posts.edit'
    controller: 'PostsDetailController'
    action: 'edit'
    where: 'client'

  @route 'books',
    name: 'books'
    controller: 'BooksController'
    action: 'action'
    where: 'client'

  @route '/books/:_id',
    name: 'books.detail'
    controller: 'BooksDetailController'
    action: 'action'
    where: 'client'

  @route '/books/:_id/edit',
    name: 'books.edit'
    controller: 'BooksEditController'
    action: 'action'
    where: 'client'

#  @route '/books/:_id/edit',
#    name: 'books.edit.home'
#    controller: 'BooksEditController'
#    action: 'home'
#    where: 'client'

Router.route 'profile',
  name: 'profile'
  controller: 'ProfileController'
  action: 'action'
  where: 'client'