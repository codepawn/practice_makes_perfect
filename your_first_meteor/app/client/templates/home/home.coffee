Session.set 'selectedPlayer', 'test Session'

Template.Home.events
  'click .player': ->
    playerId = @_id
    Session.set 'selectedPlayer', playerId

  'click [name=increment]': (e, tmpl)->
    Meteor.call 'increment', Session.get 'selectedPlayer'

  'click [name=decrement]': ->
    Meteor.call 'decrement', Session.get 'selectedPlayer'

  'click [name=rm]': (e, tmpl) ->
    Meteor.call 'removePlayerData', Session.get 'selectedPlayer'


Template.Home.helpers
  players: ->
    Players.find {},
      sort:
        score: -1
        name: 1

  selectedClass: ->
    if @_id is Session.get 'selectedPlayer' then "selected" else ''

  showSelectedPlayer: ->
    Players.findOne Session.get 'selectedPlayer'

Template.Home.created = ->

Template.Home.rendered = ->

Template.Home.destroyed = ->
