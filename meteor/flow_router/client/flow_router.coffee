Template.layout1.events

Template.layout1.helpers
  posts: ->
    Posts.find()

  'loadingCheck': ->
    FlowRouter.subsReady 'myPost', ->
      console.log "loaded"

Template.layout1.created = ->

Template.layout1.rendered = ->
  console.log("Is myPost ready?:", FlowRouter.subsReady("myPost"))
  console.log("Does all subscriptions ready?:", FlowRouter.subsReady())
  Tracker.autorun ->
    console.log("Is myPost ready?:", FlowRouter.subsReady("myPost"))
    console.log("Does all subscriptions ready?:", FlowRouter.subsReady())

Template.layout1.destroyed = ->


Template.header.events

Template.header.helpers

Template.header.created = ->

Template.header.rendered = ->

Template.header.destroyed = ->