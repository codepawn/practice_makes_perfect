Session.setDefault 'progressBar', 30
# Main: Event Handlers and Helpers
Template.Main.events
  'click button[name=add]': ->
    if 'progressBar' is 100
      Session.setDefault 'progressBar', 30
    else
      Session.set 'progressBar', Session.get('progressBar') + 1
  'click button[name=add2]': ->
    Session.set 'progressBar', Session.get('progressBar') + 5
# Example:
#  "click .selector": (e, tmpl) ->
#
  'click button[name=random]': ->
    a = Math.floor(Math.random() * 100) + 1
    Session.set 'progressBar', Session.get('progressBar') - a


Template.Main.helpers
  progress: ->
    Session.get 'progressBar'

# Example:
#   items: ->
#

# Main: Lifecycle Hooks
Template.Main.created = ->

Template.Main.rendered = ->

Template.Main.destroyed = ->

