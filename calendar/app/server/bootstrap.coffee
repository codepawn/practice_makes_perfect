Meteor.startup ->
  Meteor.methods
    'saveCalEvent': (ce)->
      CalEvent.insert(ce)

