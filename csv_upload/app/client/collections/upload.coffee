imageStore = new (FS.Store.GridFS)('images')
Images = new (FS.Collection)('images', stores: [imageStore])

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