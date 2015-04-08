#***************************************************************************
# Server Only Methods
#*****************************************************************************

Meteor.methods
  'sendLogMessage': ->
    console.log "hello world"

  'insertPlayerData':(playerName) ->
    console.log "work"
    Players.insert
      name: playerName
      score: 0
      createBy: Meteor.userId()
