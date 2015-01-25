# Main: Event Handlers and Helpers
Template.Main.events
# Example:
#  "click .selector": (e, tmpl) ->
#


Template.Main.helpers
# Example:
#   items: ->
#

# Main: Lifecycle Hooks
Template.Main.created = ->

Template.Main.rendered = ->
  $('#simple-menu').sidr()

Template.Main.destroyed = ->