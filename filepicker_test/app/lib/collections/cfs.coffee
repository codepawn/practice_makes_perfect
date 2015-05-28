imageStore = new (FS.Store.GridFS)('images')
@Images = new (FS.Collection)('images', stores: [imageStore])

if Meteor.isServer
  Images.allow
    insert: ->
      true
    update: ->
      true
    remove: ->
      true
    download: ->
      true
  Images.deny
    insert: ->
      false
    update: ->
      false
    remove: ->
      false
    download: ->
      false