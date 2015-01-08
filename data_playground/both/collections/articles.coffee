@Articles = new Mongo.Collection('articles');
#
# Add query methods like this:
#  Articles.findPublic = ->
#    Articles.find is_public: true
#