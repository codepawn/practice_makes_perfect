Router.configure
  layoutTemplate: 'MasterLayout'
  loadingTemplate: 'Loading'
  notFoundTemplate: 'NotFound'

Router.route '/',
  name: 'home'
  controller: 'HomeController'
  action: 'action'
  where: 'client'

Router.route 'posts/:_id',
  name: 'posts.detail'
  controller: 'PostsController'
  action: 'action'
  where: 'client'