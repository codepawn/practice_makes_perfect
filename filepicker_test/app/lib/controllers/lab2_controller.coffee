@Lab2Controller = RouteController.extend
  subscriptions: ->
  data: ->
  waitOn: ->
    Meteor.subscribe 'topTenPosts'


  action: ->
# You can create as many action functions as you'd like.
# This is the primary function for running your route.
# Usually it just renders a template to a page. But it
# might also perform some conditional logic. Override
# the data context by providing it as an option in the
# last parameter.
    @render 'Lab2', {}