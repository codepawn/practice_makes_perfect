Router.configure
  layoutTemplate: "MasterLayout"
  loadingTemplate: "Loading"
  notFoundTemplate: "NotFound"

Router.map ->
  @route 'Main',
    path: '/'
    name: 'main'
#
#@MainController = RouteController.extend
#  waitOn: ->
#
#  data: ->
#    items:
#      Todos.find {},
#        sort:
#          created_at: -1
#      .fetch()
#
#  action: ->
#    @render()
#    return