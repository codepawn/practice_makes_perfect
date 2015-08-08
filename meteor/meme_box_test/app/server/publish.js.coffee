Meteor.publish 'sort', ->
  Sort.find {}, {
    sort:
      number: -1
  }