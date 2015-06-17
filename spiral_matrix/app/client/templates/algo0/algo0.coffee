Template.Algo0.events
  'keyup [name=fizz]': (e, tmpl)->
    console.log e.currentTarget.value
    Session.set 'fizz', parseInt(e.currentTarget.value)
  'keyup [name=buzz]': (e, tmpl)->
    console.log e.currentTarget.value
    Session.set 'buzz', parseInt(e.currentTarget.value)
  'keyup [name=till]': (e, tmpl)->
    console.log e.currentTarget.value
    Session.set 'till', parseInt(e.currentTarget.value)

Template.Algo0.helpers
  'fizz': ->
    Session.get 'fizz'
  'buzz': ->
    Session.get 'buzz'
  'fizzValue': ->
    counter1 = null
    for i in [1..Session.get 'till']
      unless i%Session.get 'fizz'
        'fizz'
      else unless i%Session.get 'buzz'
        'buzz'
      else
        i
#    "X is Set #{Session.get 'xValue'} And Y is Set #{Session.get 'yValue'} \n next"

  'till':->
    Session.get 'till'

Template.Algo0.created = ->

Template.Algo0.rendered = ->
  Session.setDefault 'fizz', 3
  Session.setDefault 'buzz', 5
  Session.setDefault 'till', 100

Template.Algo0.destroyed = ->
