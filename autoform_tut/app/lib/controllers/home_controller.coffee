@HomeController = RouteController.extend
  layoutTemplate: 'MasterLayout'
  subscriptions: ->
  waitOn: ->
    Meteor.subscribe 'posts'
  action: ->
    @render 'Home'