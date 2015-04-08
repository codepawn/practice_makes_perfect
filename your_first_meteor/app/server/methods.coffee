#***************************************************************************
# Server Only Methods
#*****************************************************************************

Meteor.methods
  'sendLogMessage': ->
    console.log "hello world"

  'insertPlayerData': (playerNameVar) ->
    Players.insert
      name: playerNameVar
      score: 0
      createdBy: Meteor.userId()

  'removePlayerData': (playerName)->
    Players.remove playerName

  'increment': (a) ->
    Players.update a
    , $inc:
      score: 5

  'decrement': (a) ->
    Players.update a
    , $inc:
      score: -5

