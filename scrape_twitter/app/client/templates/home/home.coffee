Template.Home.events
  'click [name=getTweets]': ->
    Meteor.call 'getTweets', (error, result)->
      if error
        console.log "error", error

      console.log result

      Session.set 'tweets', result

Template.Home.helpers
  rant: ->
    Session.get 'tweets' 

# Home: Lifecycle Hooks 
Template.Home.created = ->

Template.Home.rendered = ->

Template.Home.destroyed = ->
