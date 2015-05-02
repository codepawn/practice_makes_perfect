Template.Home.events
  'click [name=counter]': ->
    console.log "+1"
    Session.set 'counter', Session.get('counter') + 1

  'click [name=rm]': ->
    Resolutions.remove @_id

  'click .toggle-checked': ->
    Resolutions.update @_id, $set:
      checked: !@checked

  'change .hide-finished': (e) ->
    Session.set 'hideFinished', e.target.checked
    console.log Session.get 'hideFinished'


Template.Home.helpers
  counter: ->
    Session.get 'counter'

  resolutions: ->
    if Session.get 'hideFinished'
      Resolutions.find {checked: {$ne: true}}, {
        sort:
          createdAt: -1
      }
    else
      Resolutions.find {}, {
        sort:
          createdAt: -1
      }

  timestamp: ->
    moment @createdAt
    .fromNow()

  check: ->
    if @checked then 'check' else ''

Template.Home.created = ->
  Session.setDefault 'counter', 0

Template.Home.rendered = ->

Template.Home.destroyed = ->
