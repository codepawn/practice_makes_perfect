# Postslist: Event Handlers and Helpers
Template.Postslist.events
# Example:
#  "click .selector": (e, tmpl) ->
#

Template.Postslist.helpers
# Example:
#   items: ->
#
  posts: ->
    Postsdata.find {}, sort: {createAt: 1}

# Postslist: Lifecycle Hooks
Template.Postslist.created = ->

Template.Postslist.rendered = ->

Template.Postslist.destroyed = ->

