@Postsdata = new Mongo.Collection('postsdata');
#
# Add query methods like this:
#  Postsdata.findPublic = ->
#    Postsdata.find is_public: true
#