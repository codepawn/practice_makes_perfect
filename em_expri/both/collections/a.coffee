@A = new Mongo.Collection('a');
#
# Add query methods like this:
#  A.findPublic = ->
#    A.find is_public: true
#