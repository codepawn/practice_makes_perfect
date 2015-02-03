@PostsListController = RouteController.extend(
  waitOn: ->
    Meteor.subscribe 'Postsdata'

  fastRender: true

  data: ->

  action: ->
    @render()
    return
)
