FlowRouter.route '/',
  middlewares: []
  subscriptions: ->
    @register 'myPost', Meteor.subscribe 'posts'
  action: ->
    FlowLayout.render 'layout1',
      top: 'header'
      main: 'postList'

FlowRouter.route '/singlePost',
  subscriptions: () ->
  action: ->
    FlowLayout.render 'singlePost'
    console.log "blog work"

FlowRouter.route '/mdl',
  subscriptions: () ->
  action: ->
    FlowLayout.render 'mdl'

FlowRouter.route '/mdl2',
  subscriptions: () ->
  action: ->
    FlowLayout.render 'mdl2'