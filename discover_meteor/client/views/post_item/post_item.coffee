# PostItem: Event Handlers and Helpers
Template.PostItem.events
# Example:
#  "click .selector": (e, tmpl) ->
#

Template.PostItem.helpers
  domain: ->
    a = document.createElement('a')
    a.href = this.url
    a.hostname

# PostItem: Lifecycle Hooks
Template.PostItem.created = ->

Template.PostItem.rendered = ->

Template.PostItem.destroyed = ->