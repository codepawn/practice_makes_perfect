dayCounter = (num) ->
  numSecond = 0
  numMinute = 0
  numHour = 0
  for i in [1..24]
    if i is num
      numHour += 1
    for i in [1..60]
      if i is num
        numMinute += 1
      for i in [1..60]
        if i is num
          numSecond += 1
  numSecond + (numMinute * 60) + (numHour * 60 * 60)

Template.N4.events
  'keyup [name=nValue]': (e, tmpl)->
    inputValue = parseInt(e.currentTarget.value)
    console.log inputValue
    Session.set 'setSecond', inputValue

    Session.set 'valueSecond', dayCounter(inputValue)

Template.N4.helpers
  nValue: ->
    Session.get 'setSecond'
  totalSecondPerDay: ->
    24 * 60 * 60
  thirdSecondPerDay: ->
    Session.get 'valueSecond'

# N4: Lifecycle Hooks 
Template.N4.created = ->
  Session.setDefault 'setSecond', 3
  Session.setDefault 'valueSecond', dayCounter(Session.get('setSecond'))

Template.N4.rendered = ->
  console.log 60 * 60 * 24

Template.N4.destroyed = ->
