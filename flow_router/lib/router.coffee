# FlowRouter.route '/blog/:postId',
#  middlewares: []
#  subscriptions: (params, queryParams) ->
#     Meteor.subscribe ''
#  action: (params, queryParams) ->
#    console.log 'Params:', params
#    console.log 'Query Params:', queryParams
#  name: '<name for the route>'

# FlowRouter.go '/blog/my-post?comments=on&color=dark'

FlowRouter.route '/',
  middlewares: []
  subscriptions: ->
    Meteor.subscribe 'posts'
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