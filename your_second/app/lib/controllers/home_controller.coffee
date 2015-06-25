@HomeController = RouteController.extend
  layoutTemplate: 'MasterLayout'
  subscriptions: ->
  waitOn: ->
    Meteor.subscribe 'todos'
  action: ->
    @render 'Home'
