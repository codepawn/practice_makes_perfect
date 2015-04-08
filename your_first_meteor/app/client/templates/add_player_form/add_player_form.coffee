Template.AddPlayerForm.events
  'submit form': (e, tmpl)->
    e.preventDefault()
    console.log e.type
    Players.insert
      name: e.target.playerName.value
      score: 0
      createdBy: Meteor.userId()
    tmpl.find('form').reset()

Template.AddPlayerForm.helpers {}

# AddPlayerForm: Lifecycle Hooks 
Template.AddPlayerForm.created = ->

Template.AddPlayerForm.rendered = ->

Template.AddPlayerForm.destroyed = ->
