#
# ItemsIndex Publish Functions
#
Meteor.publish "items_index", ->
  # you can remove this if you return a cursor
  @ready()
  return