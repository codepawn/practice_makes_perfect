@PostsDetailController = RouteController.extend
  subscriptions: ->
    @subscribe 'post', @params._id

  data: ->
    Posts.findOne _id:@params._id

  action: ->
    @render 'PostsDetail', {}