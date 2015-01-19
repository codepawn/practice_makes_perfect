#
# Add query methods like this:
#  A.findPublic = ->
#    A.find is_public: true
#
A.allow
  insert: (userId, doc) ->
    true

  update: (userId, doc, fieldNames, modifier) ->
    true

  remove: (userId, doc) ->
    true

A.deny
  insert: (userId, doc) ->
    false

  update: (userId, doc, fieldNames, modifier) ->
    false

  remove: (userId, doc) ->
    false