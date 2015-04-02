Template.Home.events
  'click [name=remove]': ->
    Todos.remove _id: @_id

  'click [name=todoInput]': (e, tmpl) ->

Template.Home.helpers
  items: ->
    Todos.find()

# Home: Lifecycle Hooks 
Template.Home.created = ->

Template.Home.rendered = ->

Template.Home.destroyed = ->
