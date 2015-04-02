@HomeController = RouteController.extend(
  layoutTemplate: 'MasterLayout'
  subscriptions: ->
  action: ->
    if Session.get 'isLoggedIn'
      @render 'Home'
    else
      @render 'Login'

)
