@Items = new Mongo.Collection('items');
#
# Add query methods like this:
#  Items.findPublic = ->
#    Items.find is_public: true
#