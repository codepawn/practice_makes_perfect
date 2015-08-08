Meteor.startup ->
  if Posts.find().count() is 0
    for i in [1..4]
      Posts.insert
        title: "Introducing Telescope #{i}"
        url: "http://sachagreif.com/introducing-telescope/"
      Posts.insert
        title: "Meteor #{i}"
        url: "http://meteor.com"
      Posts.insert
        title: "The Meteor Book #{i}"
        url: "http://themeteorbook.com"