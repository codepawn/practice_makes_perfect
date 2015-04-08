@HomeController = RouteController.extend
  layoutTemplate: 'MasterLayout'
  subscriptions: ->
    @subscribe 'posts'
  action: ->
    @render 'Home'
    return

