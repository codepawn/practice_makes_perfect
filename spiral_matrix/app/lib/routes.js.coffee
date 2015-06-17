Router.configure
  layoutTemplate: 'MasterLayout'
  loadingTemplate: 'Loading'
  notFoundTemplate: 'NotFound'

Router.route '/',
  name: 'home'
  controller: 'HomeController'
  action: 'action'
  where: 'client'

Router.route 'algo0',
  name: 'algo0'
  controller: 'Algo0Controller'
  action: 'action'
  where: 'client'