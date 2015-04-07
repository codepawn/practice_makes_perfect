Session.set 'selectedPlayer', 'test Session'

Template.Home.events
  'click .player': ->
    playerId = @_id
    Session.set 'selectedPlayer', playerId

Template.Home.helpers
  players: ->
    Players.find()


Template.Home.created = ->

Template.Home.rendered = ->

Template.Home.destroyed = ->
