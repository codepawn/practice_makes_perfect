Template.Home.events
  'click [name=rm]': ->
    Images.remove @_id

#  'change .myFileInput': (event, template) ->
#    FS.Utility.eachFile event, (file) ->
#      Images.insert file, (err, fileObj) ->
#        if err
#          console.log err
#        else
#  # handle success depending what you need to do
#          userId = Meteor.userId()
#          imagesURL = 'profile.image': '/cfs/files/images/' + fileObj._id
#          Meteor.users.update userId, $set: imagesURL


Template.Home.helpers
  images: ->
    Images.find()

# Home: Lifecycle Hooks 
Template.Home.created = ->

Template.Home.rendered = ->

Template.Home.destroyed = ->
