Template.N2.events
  'keyup [name=nValue]': (e, tmpl)->
    console.log parseInt(e.currentTarget.value)
    Session.set 'nValue', parseInt(e.currentTarget.value)

    if Session.get('nValue') is 0 or null
      console.log "Not enough"
    else
      value = Session.get 'nValue'
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

Template.N2.helpers
  'nValue': ->
    Session.get 'nValue'

  'alert': ->
    if Session.get('nValue') is 0 or null
      "숫자를 입력해주세요"
    else
      "콘솔창을 봐주세요"

# N2: Lifecycle Hooks
Template.N2.created = ->
  Session.setDefault 'nValue', 0

Template.N2.rendered = ->

Template.N2.destroyed = ->
