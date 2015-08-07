Template.Algo1.events
  'keyup [name=till]': (e, tmpl)->
    console.log parseInt(e.currentTarget.value)
    Session.set 'till', parseInt(e.currentTarget.value)
  'keyup [name=except]': (e, tmpl)->
    console.log parseInt(e.currentTarget.value)
    Session.set 'except', parseInt(e.currentTarget.value)

Template.Algo1.helpers
  'till': ->
    Session.get 'till'
  'except': ->
    Session.get 'except'
  'exceptValue': ->
    counter = 0
    for i in [0..Session.get 'till']
      unless i % Session.get('except') is 0
        counter += i

Template.Algo1.created = ->

Template.Algo1.rendered = ->
  Session.setDefault 'till', 100
  Session.setDefault 'except', 4

Template.Algo1.destroyed = ->
