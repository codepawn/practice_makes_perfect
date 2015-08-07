
Router.route 'freewall',
  name: 'freewall'
  controller: 'FreewallController'
  action: 'action'
  where: 'client'

Router.route 'freewall2',
  name: 'freewall2'
  controller: 'Freewall2Controller'
  action: 'action'
  where: 'client'