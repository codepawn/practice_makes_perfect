Router.configure
  layoutTemplate: 'MasterLayout'
  loadingTemplate: 'Loading'
  notFoundTemplate: 'NotFound'
  onBeforeAction: ->
    if !Meteor.user()
      @render 'AccessDenied'
    else
      @next()

Router.route '/',
  name: 'home'
  controller: 'HomeController'
  action: 'action'
  where: 'client'

Router.route 'posts/:_id',
  name: 'posts.detail'
  controller: 'PostsController'
  action: 'action'
  where: 'client'

Router.route 'insert_post',
  name: 'insertPost'
  controller: 'InsertPostController'
  action: 'action'
  where: 'client'

Router.route 'edit_post/:_id',
  name: 'editPost'
  controller: 'PostsController'
  action: 'edit'
  where: 'client'