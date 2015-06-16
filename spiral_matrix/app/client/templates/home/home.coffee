Template.Home.events
  'keyup [name=xValue]': (e, tmpl)->
    console.log parseInt(e.currentTarget.value)
    Session.set 'xValue', parseInt(e.currentTarget.value)

  'keyup [name=yValue]': (e, tmpl)->
    console.log parseInt(e.currentTarget.value)
    Session.set 'yValue', parseInt(e.currentTarget.value)

    $('[name=matrixTextArea').val(e.currentTarget.value)

  'click [name=checkToggle]': ->
    console.log "toggleClicked"


Template.Home.helpers
  'matrixValue': ->
    "X is Set #{Session.get 'xValue'} And Y is Set #{Session.get 'yValue'}"

  'xValue': ->
    Session.get 'xValue'
  'yValue': ->
    Session.get 'yValue'

  'checked': ->
    if Session.get 'checked' then 'checked' else ''

Template.Home.created = ->
  Session.setDefault 'xValue', 6
  Session.setDefault 'yValue', 5
  Session.setDefault 'checked', true

Template.Home.rendered = ->
  $('.ui.checkbox').checkbox()

Template.Home.destroyed = ->
