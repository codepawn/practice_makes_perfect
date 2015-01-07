#
# Add query methods like this:
#  Foobar2.findPublic = ->
#    Foobar2.find is_public: true
#
Foobar2.allow
  insert: (userId, doc) ->
    true

  update: (userId, doc, fieldNames, modifier) ->
    true

  remove: (userId, doc) ->
    true

Foobar2.deny
  insert: (userId, doc) ->
    false

  update: (userId, doc, fieldNames, modifier) ->
    false

  remove: (userId, doc) ->
    false