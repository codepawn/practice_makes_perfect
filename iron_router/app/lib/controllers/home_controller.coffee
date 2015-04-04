@HomeController = RouteController.extend(
  layoutTemplate: 'MasterLayout'
  subscriptions: ->
    @subscribe 'articles'
  action: ->
    if @ready()
      if Session.get 'isLoggedIn'
        @render 'Home'
      else
        @render 'Login'
    else
      @render 'Loading'
)
