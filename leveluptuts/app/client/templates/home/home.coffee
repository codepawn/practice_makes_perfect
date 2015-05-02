Template.Home.events
  'click [name=counter]': ->
    console.log "+1"
    Session.set 'counter', Session.get('counter') + 1

Template.Home.helpers
  counter: ->
    Session.get 'counter'

Template.Home.created = ->
  Session.setDefault 'counter', 0

Template.Home.rendered = ->

Template.Home.destroyed = ->
