@HomeController = RouteController.extend(
  layoutTemplate: 'MasterLayout'
  subscriptions: ->
    @subscribe 'todos'
    @subscribe 'users'
  action: ->
    console.log "action"
    @render 'Home'
)
