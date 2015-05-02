@HomeController = RouteController.extend
  layoutTemplate: 'MasterLayout'
  waitOn: ->
    Meteor.subscribe 'resolutions'
  subscriptions: ->
  data: ->
#    Resolutions.find()

  action: ->
    @render 'Home'
