Router.route '/', ->
  this.render 'hello'

Session.setDefault 'counter', 0
Session.setDefault 'dice'
Session.setDefault 'zeroOne'
Session.setDefault 'oneToTen'
Session.setDefault 'opposite'

Template.hello.helpers
  counter: -> Session.get 'counter'
  dice: -> Session.get 'dice'
  zeroOne: -> Session.get 'zeroOne'
  oneToTen: -> Session.get 'oneToTen'
  opposite: -> Session.get 'opposite'

Template.hello.events
  'click button[name=counter]': ->
    Session.set 'counter', Session.get('counter') + 1

  'click button[name=hw]': ->
    alert 'hello coffee script'
  'click button[name=hw2]': ->
    alert "it's awesome"

  'click button[name=oppo]': ->
    Session.set 'opposite', true
  'click button[name=oppo2]': ->
    Session.set 'opposite', false

  'click button[name=triger]': ->
    console.log Math.floor Math.random() * 6 + 1
  'click button[name=triger2]': ->
    console.log Math.floor Math.random() * 2
  'click button[name=triger3]': ->
    console.log x for x in [1..10]
  'click button[name=triger4]': ->
    console.log (x for x in [1..10])

  'click button[name=triger5]': (evt, tmpl) ->
    x = parseInt tmpl.find('input[name=first]').value
    y = parseInt tmpl.find('input[name=second]').value
    console.log "The anwer is #{x + y}"
  'click button[name=triger6]': (evt, tmpl)->
    x = parseInt tmpl.find('input[name=first]').value
    y = parseInt tmpl.find('input[name=second]').value
    console.log "The anwer is #{x - y}"
  'click button[name=triger7]': (evt, tmpl)->
    x = parseInt tmpl.find('input[name=first]').value
    y = parseInt tmpl.find('input[name=second]').value
    console.log "The anwer is #{x * y}"
  'click button[name=triger8]': (evt, tmpl)->
    x = parseInt tmpl.find('input[name=first]').value
    y = parseInt tmpl.find('input[name=second]').value
    console.log "The anwer is #{x / y}"

  'click button[name=triger9]': ->
    Session.set 'dice', Math.floor Math.random() * 6 + 1
  'click button[name=triger10]': ->
    Session.set 'zeroOne', Math.floor Math.random() * 2
  'click button[name=triger11]': ->
    Session.set 'oneToTen', (x for x in [1..10])


Template.hello.rendered = ->


Template.body.rendered = ->




