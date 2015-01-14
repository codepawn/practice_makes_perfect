# Main: Event Handlers and Helpers
Template.Main.events
# Example:
#  "click .selector": (e, tmpl) ->
#
  'click button[name=add]':->
    i = Math.floor Math.random() * 12
    count = Pics.find().count() + 1
    Pics.insert({src:"sample-images/image_#{i}.jpg",width:200,no:count})
  'click button[name=rm]':->
    Pics.remove({_id:this._id})


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
