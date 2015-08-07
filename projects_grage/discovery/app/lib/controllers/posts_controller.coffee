@PostsController = RouteController.extend(
  subscriptions: ->
  waitOn: ->
    Meteor.subscribe 'post', @params._id
  data: ->
    Posts.findOne _id: @params._id

  action: ->
    Session.set 'pageTitle', 'Detail'
    @render 'PostsDetail', {}

  edit: ->
    Session.set 'pageTitle', 'Edit'
    @render 'EditPost', {}
)
