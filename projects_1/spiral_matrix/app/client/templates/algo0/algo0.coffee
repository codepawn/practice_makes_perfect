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
  'keyup [name=fizzbuzz]': (e, tmpl)->
    console.log e.currentTarget.value
    Session.set 'fizzbuzz', parseInt(e.currentTarget.value)

Template.Algo0.helpers
  'fizz': ->
    Session.get 'fizz'
  'buzz': ->
    Session.get 'buzz'
  'fizzValue': ->
    for i in [0..Session.get 'till']
      if i % Session.get('fizzbuzz') is 0
        'fizzbuzz'
      else if i % Session.get('fizz') is 0
        'fizz'
      else if i % Session.get('buzz') is 0
        'buzz'
      else
        i

  'till': ->
    Session.get 'till'
  'fizzbuzz': ->
    Session.get 'fizzbuzz'

Template.Algo0.created = ->

Template.Algo0.rendered = ->
  Session.setDefault 'fizz', 3
  Session.setDefault 'buzz', 5
  Session.setDefault 'fizzbuzz', 10
  Session.setDefault 'till', 300

Template.Algo0.destroyed = ->
