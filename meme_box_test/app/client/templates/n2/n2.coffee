Template.N2.events

Template.N2.helpers

# N2: Lifecycle Hooks 
Template.N2.created = ->

Template.N2.rendered = ->
  value = prompt("값을 입력하세요.")
  line = []
  createRandomExit = (length)->
    Math.random() * length

  for i in [0...value]
    exitValue = Math.round createRandomExit(value)
    #    console.log exitValue

    for g in [0...value]
      line += "+"
      if g is exitValue
        line += " "
      else
        line += "-"
      if g is value - 1
        line += "+"

    line += "\n"

    unless i is value - 1
      for g in [0...value]
        if g is 0
          line += "|  "
        else if g is value - 1
          line += " |"
        else
          line += "  "

    line += "\n"

  console.log line

Template.N2.destroyed = ->
