@HomeController = RouteController.extend(
  layoutTemplate: 'MasterLayout'
  subscriptions: ->
  waitOn: ->
    Meteor.subscribe 'images'
  data:->
    Images.find()
  action: ->
    @render 'Home'
    return
)
