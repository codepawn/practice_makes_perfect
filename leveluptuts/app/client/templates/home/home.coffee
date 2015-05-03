Template.Home.events
  'click [name=rm]': ->
    Meteor.call 'remove', @_id

  'click .toggle-checked': ->
    Meteor.call 'updateCheck', @_id, !@checked

  'change .hide-finished': (e) ->
    Session.set 'hideFinished', e.target.checked
    console.log Session.get 'hideFinished'

Accounts.ui.config
  passwordSignupFields: "USERNAME_ONLY"


Template.Home.helpers
  resolutions: ->
    if Session.get 'hideFinished'
      Resolutions.find {checked: {$ne: true}}, {
        sort:
          createdAt: -1
      }
    else
      Resolutions.find {}, {
        sort:
          createdAt: -1
      }

  timestamp: ->
    moment @createdAt
    .fromNow()

  check: ->
    if @checked then 'check' else ''

  checked2: ->
    if @checked then 'true' else 'false'

  hideFunished: ->
    Session.get 'hideFinished'

  isOwner: ->
    @owner is Meteor.userId()


Template.Home.created = ->

Template.Home.rendered = ->

Template.Home.destroyed = ->
