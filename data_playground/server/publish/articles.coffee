#
# Articles Publish Functions
#
Meteor.publish "articles", ->
  console.log "Shot!"
  Articles.find()
