# Main: Event Handlers and Helpers
Template.Main.events
  'click button[name=add]': (evt, tmpl) ->
    evt.preventDefault()
    noValue = tmpl.find('input[name=no]').value
    nameValue = tmpl.find('input[name=name]').value
    emailValue = tmpl.find('input[name=email]').value
    Users.insert
      no: noValue
      name: nameValue
      email: emailValue

Template.Main.helpers
  helper: ->
    'foobar helper test'
  count: ->
    Users.find({}, {sort: {no: -1}})


# Main: Lifecycle Hooks
Template.Main.created = ->

Template.Main.rendered = ->

Template.Main.destroyed = ->