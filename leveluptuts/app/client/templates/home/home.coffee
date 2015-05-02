Template.Home.events
  'click [name=counter]': ->
    console.log "+1"
    Session.set 'counter', Session.get('counter') + 1

  'click [name=rm]': ->
    Resolutions.remove @_id

  'click .toggle-checked': ->
    console.log "work"
    Resolutions.update @_id, $set:checked: true

Template.Home.helpers
  counter: ->
    Session.get 'counter'

  resolutions: ->
    Resolutions.find {}, {
      sort:
        createdAt: -1
    }

  timestamp: ->
    moment @createdAt
    .fromNow()

Template.Home.created = ->
  Session.setDefault 'counter', 0

Template.Home.rendered = ->

Template.Home.destroyed = ->
