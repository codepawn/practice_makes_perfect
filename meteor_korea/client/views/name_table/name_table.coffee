# NameTable: Event Handlers and Helpers
Template.NameTable.events
  'click button[name=add]': (evt, tmpl) ->
    evt.preventDefault()
    noValue = tmpl.find('input[name=no]').value
    nameValue = tmpl.find('input[name=name]').value
    emailValue = tmpl.find('input[name=email]').value
    Users.insert
      no: noValue
      name: nameValue
      email: emailValue
    , (error, result)->
        if error
          alert 'Wrong!'
        else
          tmpl.find('input[name=email]').value = ''
          tmpl.find('input[name=name]').value = ''
          tmpl.find('input[name=no]').value = ''

Template.NameTable.helpers
  count: ->
    Users.find({}, {sort: {no: -1}})


# NameTable: Lifecycle Hooks
Template.NameTable.created = ->

Template.NameTable.rendered = ->

Template.NameTable.destroyed = ->
