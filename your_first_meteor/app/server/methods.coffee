#***************************************************************************
# Server Only Methods
#*****************************************************************************

Meteor.methods
  'sendLogMessage': ->
    console.log "hello world"

  'insertPlayerData':(playerNameVar) ->
    Players.insert
      name: playerNameVar
      score: 0
      createdBy: Meteor.userId()
