@HomeController = RouteController.extend(
  layoutTemplate: 'MasterLayout'
  subscriptions: ->
    @subscribe 'todos'
  action: ->
    @render 'Home'
    return
)
