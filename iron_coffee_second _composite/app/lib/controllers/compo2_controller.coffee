@Compo2Controller = RouteController.extend
  subscriptions: ->
  data: ->
  waitOn: ->
    Meteor.subscribe 'topFiveTodos'
  action: ->
    @render 'Compo2', {}

