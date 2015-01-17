#
# Add query methods like this:
#  Postsdata.findPublic = ->
#    Postsdata.find is_public: true
#
Postsdata.allow
  insert: (userId, doc) ->
    true

  update: (userId, doc, fieldNames, modifier) ->
    true

  remove: (userId, doc) ->
    true

Postsdata.deny
  insert: (userId, doc) ->
    false

  update: (userId, doc, fieldNames, modifier) ->
    false

  remove: (userId, doc) ->
    false