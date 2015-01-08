@Likes = new Mongo.Collection('likes');
#
# Add query methods like this:
#  Likes.findPublic = ->
#    Likes.find is_public: true
#