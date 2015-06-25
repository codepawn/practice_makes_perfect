Router.configure
  layoutTemplate: 'MasterLayout'
  loadingTemplate: 'Loading'
  notFoundTemplate: 'NotFound'

Router.route '/',
  name: 'home'
  controller: 'HomeController'
  action: 'action'
  where: 'client'

Router.route 'n1',
  name: 'n1'
  controller: 'N1Controller'
  action: 'action'
  where: 'client'

Router.route 'n2',
  name: 'n2'
  controller: 'N2Controller'
  action: 'action'
  where: 'client'

Router.route 'n3',
  name: 'n3'
  controller: 'N3Controller'
  action: 'action'
  where: 'client'

Router.route 'n4',
  name: 'n4'
  controller: 'N4Controller'
  action: 'action'
  where: 'client'

Router.route 'n5',
  name: 'n5'
  controller: 'N5Controller'
  action: 'action'
  where: 'client'