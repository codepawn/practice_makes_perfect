#
# Mongocount Publish Functions
#
Meteor.publish "mongocount", ->
  # you can remove this if you return a cursor
  @ready()
  return Mongocount.find()
