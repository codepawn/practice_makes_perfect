@Foobar = new Mongo.Collection('foobar');
#
# Add query methods like this:
#  Foobar.findPublic = ->
#    Foobar.find is_public: true
#