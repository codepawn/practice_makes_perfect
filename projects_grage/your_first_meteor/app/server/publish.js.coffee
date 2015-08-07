Meteor.publish 'players', ->
  Players.find({createdBy:@userId})