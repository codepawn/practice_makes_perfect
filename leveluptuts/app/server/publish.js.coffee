Meteor.publish 'resolutions', ->
  Resolutions.find {}, {
    sort:
      createdAt: -1
  }

Meteor.publish 'count', ->
  Counter.find()
