Template.Home.events
  'click [name=rm]': ->
    Articles.remove _id: @_id

Template.Home.helpers
  articles: ->
    Articles.find {},
      sort:
        no: 1

# Home: Lifecycle Hooks 
Template.Home.created = ->

Template.Home.rendered = ->

Template.Home.destroyed = ->


