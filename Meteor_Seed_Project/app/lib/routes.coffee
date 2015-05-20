Router.configure
  layoutTemplate: 'mainLayout'
  notFoundTemplate: 'notFound'

Router.route '/',
  name: 'pageOne'
  controller: 'HomeController'
  action: 'action'
  where: 'client'
