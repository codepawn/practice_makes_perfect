@HomeController = RouteController.extend(
  layoutTemplate: 'MasterLayout'
  subscriptions: ->
    @subscribe 'todos'
  action: ->
    console.log "action"
    @render 'Home'
)
