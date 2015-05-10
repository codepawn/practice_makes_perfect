Template.Home.events
#  'change .myFileInput': (e, tmpl) ->
#    FS.Utility.eachFile e, (file) ->
#      Images.insert file, (err, fileObj) ->
#        if err
#          console.log err
#        else
#          console.log "work"
#          userId = Meteor.userId()
#          imagesURL = 'profile.image': '/cfs/files/images/' + fileObj._id
#          Meteor.users.update userId, $set: imagesURL

Template.Home.helpers


Template.Home.created = ->

Template.Home.rendered = ->

Template.Home.destroyed = ->
