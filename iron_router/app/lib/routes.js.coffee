Router.configure
  layoutTemplate: 'MasterLayout'
  loadingTemplate: 'Loading'
  notFoundTemplate: 'NotFound'

Iron.Router.plugins.authorize = (router, options)->
  router.onBeforeAction ->
    if Meteor.loggingIn()
      console.log "loged"
    else if !Meteor.user()
      alert 'Please login'
      @redirect @lookupOption 'notAuthorizedRoute'
    else
      console.log "in the onBeforeAction hook"
      @next()
  , options


Router.plugin 'authorize'
, only: ['blog.new']
, notAuthorizedRoute: 'home'

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

