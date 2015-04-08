Session.set 'selectedPlayer', 'test Session'

Template.Home.events
  'click .player': ->
    playerId = @_id
    Session.set 'selectedPlayer', playerId

  'click [name=increment]': (e, tmpl)->
    selectedPlayer = Session.get 'selectedPlayer'
    Players.update selectedPlayer
    , $inc:
      score: 5
  'click [name=decrement]': ->
    selectedPlayer = Session.get 'selectedPlayer'
    Players.update selectedPlayer
    , $inc:
      score: -5

  'click [name=rm]': (e, tmpl) ->
    Players.remove Session.get 'selectedPlayer'


Template.Home.helpers
  players: ->
    Players.find {},
      sort:
        score: -1
        name: 1

  selectedClass: ->
    if @_id is Session.get 'selectedPlayer' then "selected" else ''
  
  showSelectedPlayer:->
    Players.findOne Session.get 'selectedPlayer'

Template.Home.created = ->

Template.Home.rendered = ->

Template.Home.destroyed = ->
