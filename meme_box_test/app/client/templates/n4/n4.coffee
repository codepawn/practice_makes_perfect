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

Template.N4.helpers
  totalSecondPerDay: ->
    24 * 60 * 60
  thirdSecondPerDay: ->
    dayCounter(3)


# N4: Lifecycle Hooks 
Template.N4.created = ->
  Session.setDefault 'second', 3

Template.N4.rendered = ->
  console.log 60 * 60 * 24

Template.N4.destroyed = ->
