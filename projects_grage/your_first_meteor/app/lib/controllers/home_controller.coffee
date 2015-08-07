@HomeController = RouteController.extend(
  layoutTemplate: 'MasterLayout'
  subscriptions: ->
    @subscribe 'players'
  action: ->
    @render 'Home'
    return
)
