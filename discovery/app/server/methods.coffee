#***************************************************************************
# Server Only Methods
#*****************************************************************************

Meteor.methods
  postInsert: (postAttributes)->
    check Meteor.userId(), String
    check postAttributes,
      title: String
      url: String
