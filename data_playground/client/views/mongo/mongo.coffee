-# Mongo: Event Handlers and Helpers
Template.Mongo.events
  'click button[name=count]':->


Template.Mongo.helpers
  count:-> Mongocount.find().count()

# Mongo: Lifecycle Hooks
Template.Mongo.created = ->

Template.Mongo.rendered = ->

Template.Mongo.destroyed = ->
