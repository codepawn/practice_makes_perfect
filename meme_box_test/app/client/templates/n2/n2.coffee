Template.N2.events

Template.N2.helpers

# N2: Lifecycle Hooks 
Template.N2.created = ->

Template.N2.rendered = ->
  value = prompt("값을 입력하세요.")
  line = []
  createRandomExit = (length)->
    Math.random() * length

  for i in [0..value]
    exit = Math.round createRandomExit(value) + 1

    for g in [0..value]
      line += "++"

  for i in [0..value]
    console.log line[value]

Template.N2.destroyed = ->
