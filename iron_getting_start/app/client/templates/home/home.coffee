Template.Home.events
  'click [name=remove]':->
    Todos.remove _id:@_id

Template.Home.helpers
  items: ->
    Todos.find()

# Home: Lifecycle Hooks 
Template.Home.created = ->

Template.Home.rendered = ->

Template.Home.destroyed = ->
