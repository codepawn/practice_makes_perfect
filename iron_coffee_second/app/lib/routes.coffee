Router.configure
  layoutTemplate: 'MasterLayout'
  loadingTemplate: 'Loading'
  notFoundTemplate: 'NotFound'

Router.route '/',
  name: 'home'
  controller: 'HomeController'
  action: 'action'
  where: 'client'

Router.map ->
  @route '/todos/:_id',
    name: 'todos.detail'
    controller: 'TodosController'
    action: 'detail'
    where: 'client'