@UsersController = RouteController.extend
  subscriptions: ->
    @subscribe 'user', @params._id
  data: ->
    Meteor.users.findOne _id: @params._id
  detail: ->

  detail: ->
    @render 'UsersDetail', {}
