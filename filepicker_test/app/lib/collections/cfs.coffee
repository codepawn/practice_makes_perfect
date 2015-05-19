imageStore = new (FS.Store.GridFS)('images')
@Images = new (FS.Collection)('images', stores: [imageStore])
#

`
  //var Images = new FS.Collection("images", {
  //  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
  //});
`

if Meteor.isServer
  Images.deny
    insert: ->
      false
    update: ->
      false
    remove: ->
      false
    download: ->
      false
  Images.allow
    insert: ->
      true
    update: ->
      true
    remove: ->
      true
    download: ->
      true