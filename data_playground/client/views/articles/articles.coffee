# Articles: Event Handlers and Helpers
Template.Articles.events
  'click button[name=remove]':->
    Articles.remove({_id:this._id})
# Example:
#  "click .selector": (e, tmpl) ->
#

Template.Articles.helpers
# Example:
#   items: ->
#

# Articles: Lifecycle Hooks
Template.Articles.created = ->

Template.Articles.rendered = ->

Template.Articles.destroyed = ->