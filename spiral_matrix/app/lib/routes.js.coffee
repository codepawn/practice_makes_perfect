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

Router.route 'algo1',
  name: 'algo1'
  controller: 'Algo1Controller'
  action: 'action'
  where: 'client'

Router.route 'algo2',
  name: 'algo2'
  controller: 'Algo2Controller'
  action: 'action'
  where: 'client'