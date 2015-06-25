Template.Home.events
  'keyup [name=todo-value]': (evt.tmpl) ->
    evt.preventDefault()
    tmpl

  'click [name=rm]': ->
    confirm = window.confirm 'Delete this task?'
    if confirm
      Todos.remove @_id

Template.Home.helpers
  todos: ->
    Todos.find {}, {
      sort:
        createdAt: -1
    }


Template.Home.created = ->

Template.Home.rendered = ->

Template.Home.destroyed = ->
