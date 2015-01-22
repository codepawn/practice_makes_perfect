# Client and Server Routes

Router.configure
  layoutTemplate: "MasterLayout"
  loadingTemplate: "Loading"
  notFoundTemplate: "NotFound"


Router.route "post/:_id",
  name: "post.item",
  data: ->
    Postsdata.findOne(this.params._id)

Router.route "/",
  name: "posts.item"
