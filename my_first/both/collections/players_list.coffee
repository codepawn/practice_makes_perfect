@PlayersList = new Mongo.Collection('players_list');
#
# Add query methods like this:
#  PlayersList.findPublic = ->
#    PlayersList.find is_public: true
#