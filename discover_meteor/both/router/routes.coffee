# Client and Server Routes

Router.configure
  layoutTemplate: "MasterLayout"
  loadingTemplate: "Loading"
  notFoundTemplate: "NotFound"
  waitOn: ->
    Meteor.subscribe 'Postsdata'

#
#   Example:
#   Router.route "/",
#     name: "home"
#

Router.route '/', ->
  this.render 'Postslist'

Router.route "post/:_id",
  name: "post.item",
  data: ->
    Postsdata.findOne(this.params._id)
