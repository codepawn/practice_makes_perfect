Session.setDefault 'adding_interest', false
# MasterLayout: Event Handlers and Helpers
Template.MasterLayout.events
# Example:
#  "click .selector": (e, tmpl) ->
  'click .addInterest': (evt, tmpl)->
    evt.preventDefault()
    Session.set 'adding_interest', true

Template.MasterLayout.helpers

# Example:
#   items: ->
#

# MasterLayout: Lifecycle Hooks
Template.MasterLayout.created = ->

Template.MasterLayout.rendered = ->

Template.MasterLayout.destroyed = ->