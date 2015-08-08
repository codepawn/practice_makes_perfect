@StripeController = RouteController.extend(
  get: ->
    @respense.end 'get hello world\n'
  post: ->
    @respense.end 'get hello world\n'
  action: ->
# You can create as many action functions as you'd like.
# This is the primary function for running your route.
# Usually it just renders a template to a page. But it
# might also perform some conditional logic. Override
# the data context by providing it as an option in the
# last parameter.
    @render 'home', {}
    return
)