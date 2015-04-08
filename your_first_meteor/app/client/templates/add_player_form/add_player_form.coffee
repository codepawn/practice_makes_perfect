Template.AddPlayerForm.events
  'submit form': (e, tmpl)->
    e.preventDefault()
    playerNameVar =e.target.playerName.value
    Meteor.call 'insertPlayerData', playerNameVar
    tmpl.find('form').reset()

Template.AddPlayerForm.helpers {}

# AddPlayerForm: Lifecycle Hooks d
Template.AddPlayerForm.created = ->

Template.AddPlayerForm.rendered = ->

Template.AddPlayerForm.destroyed = ->
