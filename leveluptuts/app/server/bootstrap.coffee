Meteor.startup ->
  if Counter = 0
    Counter.insert
      num: 0
