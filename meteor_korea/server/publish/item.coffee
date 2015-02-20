#
# Item Publish Functions
#
Meteor.publish "items", ->
  Users.find()
