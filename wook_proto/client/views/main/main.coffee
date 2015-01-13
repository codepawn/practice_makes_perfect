# Main: Event Handlers and Helpers
Template.Main.events
# Example:
#  "click .selector": (e, tmpl) ->
#


Template.Main.helpers
# Example:
#   items: ->
#
  items:->
    Pics.find()
# Main: Lifecycle Hooks


Template.Main.created = ->

Template.Main.rendered = ->

Template.Main.destroyed = ->