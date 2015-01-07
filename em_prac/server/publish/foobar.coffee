#
# Foobar Publish Functions
#
Meteor.publish "foobar", ->
  # you can remove this if you return a cursor
  @ready()
  return