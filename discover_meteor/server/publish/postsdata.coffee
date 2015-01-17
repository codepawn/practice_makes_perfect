#
# Postsdata Publish Functions
#
Meteor.publish "Postsdata", ->
  # you can remove this if you return a cursor
  Postsdata.find()