@BlogController = RouteController.extend(
  subscriptions: ->
# set up the subscriptions for the route and optionally
# wait on them like this:
#
# this.subscribe('item', this.params._id).wait();
#
# "Waiting" on a subscription does not block. Instead,
# the subscription handle is added to a reactive list
# and when all items in this list are ready, this.ready()
# returns true in any of your route functions.
    return
  data: ->
# return a global data context like this:
# Items.findOne({_id: this.params._id});
    return
  action: ->
    @render 'Blog', {}
    return
)
