Router.configure
  layoutTemplate: 'MasterLayout'
  loadingTemplate: 'Loading'
  notFoundTemplate: 'NotFound'

Iron.Router.plugins.authorize = (router, options)->
  

Router.onBeforeAction ->
  if Meteor.loggingIn()
    console.log "loged"
  else if !Meteor.user()
    alert 'Please login'
    @redirect 'home'
  else
    console.log "in the onBeforeAction hook"
    @next()
, only: ['blog.new']

Router.route '/',
  name: 'home'
  controller: 'HomeController'
  action: 'action'
  where: 'client'

Router.route '/blog/new',
  name: 'blog.new'
  controller: 'BlogNewController'
  action: 'action'
  where: 'client'

Router.route '/blog/:_id',
  name: 'blog.detail'
  controller: 'BlogController'
  action: 'action'
  where: 'client'

