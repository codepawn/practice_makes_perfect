Meteor.publish 'issues', (userId) ->
  Issues.find
    createdBy: userId
