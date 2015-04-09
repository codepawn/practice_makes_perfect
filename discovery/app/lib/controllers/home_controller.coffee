@HomeController = RouteController.extend
  layoutTemplate: 'MasterLayout'
  subscriptions: ->
    @subscribe 'posts'
  action: ->
    Session.set 'pageTitle', 'home'
    @render 'Home'
    return

