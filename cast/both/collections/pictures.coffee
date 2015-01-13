@Pictures = new Mongo.Collection('pictures');
#
# Add query methods like this:
#  Pictures.findPublic = ->
#    Pictures.find is_public: true
#