# Client and Server Routes

Router.configure
  layoutTemplate: "MasterLayout"
  loadingTemplate: "Loading"
  notFoundTemplate: "NotFound"

Router.route "/",
  name: "posts.list"

Router.route "post/:_id",
  name: "post.item",
  data: ->
    Postsdata.findOne(this.params._id)

Router.route "Infinity",
  path: 'infinity'
  name: "infinity"

Router.route "Pages",
  path: 'pages'
  name: "pages"
