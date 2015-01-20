@Col = new Mongo.Collection('col');
#
# Add query methods like this:
#  Col.findPublic = ->
#    Col.find is_public: true
#