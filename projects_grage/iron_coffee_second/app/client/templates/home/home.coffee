Template.Home.events

Template.Home.helpers
  completedCount: ->
    Todos.find userId: Meteor.userId(), isDone: true
    .count()

  totalCount: ->
    Todos.find userId: Meteor.userId()
    .count()


# Home: Lifecycle Hooks
Template.Home.created = ->

Template.Home.rendered = ->

Template.Home.destroyed = ->
