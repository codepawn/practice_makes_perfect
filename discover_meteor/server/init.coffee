Meteor.startup ->
  if Postsdata.find().count() is 0
    Postsdata.insert
      title: 'Introducing Telescope'
      url: 'http://sachagreif.com/introducing-telescope'
      createdAt: new Date
    Postsdata.insert
      title: 'Meteor'
      url: 'http://meteor.com'
      createdAt: new Date
    Postsdata.insert
      title: 'The Meteor Book'
      url: 'http://themeteorbook.com'
      createdAt: new Date

