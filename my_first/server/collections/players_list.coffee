#
# Add query methods like this:
#  PlayersList.findPublic = ->
#    PlayersList.find is_public: true
#
PlayersList.allow
  insert: (userId, doc) ->
    true

  update: (userId, doc, fieldNames, modifier) ->
    true

  remove: (userId, doc) ->
    true

PlayersList.deny
  insert: (userId, doc) ->
    false

  update: (userId, doc, fieldNames, modifier) ->
    false

  remove: (userId, doc) ->
    false