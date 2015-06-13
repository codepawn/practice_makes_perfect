#FlowRouter.route '/blog/:postId',
#  middlewares: []
#  subscriptions: (params, queryParams) ->
##    Meteor.subscribe ''
#  action: (params, queryParams) ->
#    console.log 'Params:', params
#    console.log 'Query Params:', queryParams
#  name: '<name for the route>'

#FlowRouter.go '/blog/my-post?comments=on&color=dark'


FlowRouter.route '/blog',
  subscriptions: (params) ->
  action: ->
    FlowLayout.render 'blog'
    console.log "work"