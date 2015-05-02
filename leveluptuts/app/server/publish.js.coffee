Meteor.publish 'resolutions', ->
  Resolutions.find {}, {
    sort:
      createdAt: -1
  }