Template.Compo2.events
  'click [name=rm]': ->
    console.log "work"
    Todos.remove @_id

Template.Compo2.helpers
  todos: ->
    Todos.find()
  users: ->
    Meteor.users.findOne {_id: @userId}, {
    }


# Compo2: Lifecycle Hooks
Template.Compo2.created = ->

Template.Compo2.rendered = ->

Template.Compo2.destroyed = ->
