Template.Login.events
  'click [name=login]': ->
    Session.set 'isLoggedIn', true

Template.Login.helpers {}

# Login: Lifecycle Hooks 
Template.Login.created = ->

Template.Login.rendered = ->

Template.Login.destroyed = ->
