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
  person = {}
  person['name'] = 'Chris'
  prop = 'year'
  person[prop] = 2014

  console.log person
  console.log person.name
  console.log person.year


Template.Home.destroyed = ->
