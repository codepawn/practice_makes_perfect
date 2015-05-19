@HomeController = RouteController.extend
  layoutTemplate: 'MasterLayout'
  subscriptions: ->
  waitOn: ->
    Meteor.subscribe 'posts'
  action: ->
    Session.set 'pageTitle', 'Home'
    @render 'Home'