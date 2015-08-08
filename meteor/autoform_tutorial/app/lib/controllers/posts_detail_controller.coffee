@PostsDetailController = RouteController.extend
  subscriptions: ->
  waitOn: ->
    Meteor.subscribe 'post', @params._id

  data: ->
    Posts.findOne _id: @params._id

  action: ->
    @render 'PostsDetail', {}
  edit: ->
    @state.set 'isEditing', true
    @render 'PostsDetail', {}