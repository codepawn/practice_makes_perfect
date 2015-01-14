# Main: Event Handlers and Helpers
Template.Main.events
# Example:
#  "click .selector": (e, tmpl) ->
#
  'click button[name=add]':->
    i = Math.random()
    count = Pics.find().count() + 1
    if i < 0.5
      Pics.insert({src:'http://cfile236.uf.daum.net/image/277A28355193812D1941BD',width:200,no:count})
    else
      Pics.insert({src:'http://pds7.egloos.com/pds/200801/02/44/e0080644_477a71aa4cfe6.jpg',width:200,no:count})
  'click button[name=rm]':->
    Pics.reset()


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