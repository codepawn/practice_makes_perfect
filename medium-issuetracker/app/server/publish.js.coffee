Meteor.publish 'issues', ->
  Issues.find
    createdBy: userId
