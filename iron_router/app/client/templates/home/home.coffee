Template.Home.events {}

Template.Home.helpers
  articles: ->
    Articles.find {},
      sort:
        no: 1

# Home: Lifecycle Hooks 
Template.Home.created = ->

Template.Home.rendered = ->

Template.Home.destroyed = ->
