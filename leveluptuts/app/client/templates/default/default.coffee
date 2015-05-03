Template.Default.events
  'click [name=counter]': ->
    console.log "+1"
    Session.set 'counter', Session.get('counter') + 1

Template.Default.helpers
  counter: ->
    Session.get 'counter'

# Default: Lifecycle Hooks 
Template.Default.created = ->
  Session.setDefault 'counter', 0

Template.Default.rendered = ->

Template.Default.destroyed = ->
