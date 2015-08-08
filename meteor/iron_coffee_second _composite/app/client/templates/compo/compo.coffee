Template.Compo.events
  'click [name=rm]': ->
    console.log "work"
    Todos.remove @_id
    Comments.remove @todoId

Template.Compo.helpers
  todos: ->
    Todos.find()

Template.Compo.created = ->

Template.Compo.rendered = ->

Template.Compo.destroyed = ->
