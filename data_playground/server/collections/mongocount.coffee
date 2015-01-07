#
# Add query methods like this:
#  Mongocount.findPublic = ->
#    Mongocount.find is_public: true
#
Mongocount.allow
  insert: (userId, doc) ->
    true

  update: (userId, doc, fieldNames, modifier) ->
    true

  remove: (userId, doc) ->
    true

Mongocount.deny
  insert: (userId, doc) ->
    false

  update: (userId, doc, fieldNames, modifier) ->
    false

  remove: (userId, doc) ->
    false