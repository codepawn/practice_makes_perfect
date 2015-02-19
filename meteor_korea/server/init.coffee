Meteor.startup ->
  if Users.find().count() is 0
    Users.insert
      no: 1
      name: 'goo'
      email: 'awef@awef.com'
    Users.insert
      no: 4
      name: 'gle'
      email: 'oij@awef.com'
    Users.insert
      no: 3
      name: 'oij'
      email: 'ioj@awef.com'
    Users.insert
      no: 2
      name: 'awef'
      email: 'awef@awef.com'
    Users.insert
      no: 6
      name: 'ergergawefwf'
      email: 'aegrerg@awef.com'
    Users.insert
      no: 5
      name: 'gereg'
      email: 'gersgesgeseegr@awef.com'