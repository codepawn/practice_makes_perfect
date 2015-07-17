Template.Home.events
  'click [name=counter]': ->
    Session.set 'counter', (Session.get 'counter') + 1

Template.Home.helpers
  counter: ->
    Session.get 'counter'

Template.Home.created = ->
  Session.set 'counter', 0
Template.Home.rendered = ->

Template.Home.destroyed = ->
