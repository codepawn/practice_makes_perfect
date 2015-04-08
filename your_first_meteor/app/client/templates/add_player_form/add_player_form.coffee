Template.AddPlayerForm.events
  'submit form': (e, tmpl)->
    e.preventDefault()
    Meteor.call 'insertPlayerData', e.target.playerName.value
    tmpl.find('form').reset()

Template.AddPlayerForm.helpers {}

# AddPlayerForm: Lifecycle Hooks 
Template.AddPlayerForm.created = ->

Template.AddPlayerForm.rendered = ->

Template.AddPlayerForm.destroyed = ->
