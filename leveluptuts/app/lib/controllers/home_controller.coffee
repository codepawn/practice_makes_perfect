@HomeController = RouteController.extend
  layoutTemplate: 'MasterLayout'
  waitOn: ->
    Meteor.subscribe 'resolutions'
    Meteor.subscribe 'count'
  subscriptions: ->
  data: ->
#    Resolutions.find()

  action: ->
    @render 'Home'
