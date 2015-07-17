FlowRouter.route '/',
  middlewares: []
  subscriptions: (param) ->
  action: () ->
    FlowLayout.render 'hello'
