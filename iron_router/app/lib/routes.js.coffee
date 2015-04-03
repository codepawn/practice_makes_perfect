Router.configure
  layoutTemplate: 'MasterLayout'
  loadingTemplate: 'Loading'
  notFoundTemplate: 'NotFound'

Router.route '/',
  name: 'home'
  controller: 'HomeController'
  action: 'action'
  where: 'client'

Router.route '/blog/:_id',
  name: 'blog.detail'
  controller: 'BlogController'
  action: 'action'
  where: 'client'