@PostsListController = RouteController.extend(
  waitOn: ->
    Meteor.subscribe 'Postsdata'

  data: ->

  action: ->
    @render()
    return
)
