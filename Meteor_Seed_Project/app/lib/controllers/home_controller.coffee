@HomeController = RouteController.extend
  layoutTemplate: 'mainLayout'
  subscriptions: ->
  action: ->
    @render 'pageOne'