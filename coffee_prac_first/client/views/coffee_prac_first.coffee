Router.route '/', ->
  this.render 'hello'

Session.setDefault 'counter', 0
Session.setDefault 'dice', 0

Template.hello.helpers
  counter: -> Session.get 'counter'

Template.hello.events
  'click button[name=counter]': ->
    Session.set 'counter', Session.get('counter') + 1

  'click button[name=hw]': ->
    alert 'hello coffee script'
  'click button[name=hw2]': ->
    alert "it's awesome"

  'click button[name=triger]': ->
    console.log Math.floor Math.random() * 6 + 1
  'click button[name=triger2]': ->
    console.log Math.floor Math.random() * 2
  'click button[name=triger3]': ->
    console.log x for x in [1..10]
  'click button[name=triger4]': ->
    y = (x for x in [1..10])
    console.log y

  'click button[name=triger5]': (evt, tmpl) ->
    x = parseInt tmpl.find('input[name=first]').value
    y = parseInt tmpl.find('input[name=second]').value
    z = x + y
    console.log "The anwer is #{z}"

  'click button[name=triger6]': (evt, tmpl)->
    x = parseInt tmpl.find('input[name=first]').value
    y = parseInt tmpl.find('input[name=second]').value
    z = x - y
    console.log "The anwer is #{z}"
  'click button[name=triger7]': (evt, tmpl)->
    x = parseInt tmpl.find('input[name=first]').value
    y = parseInt tmpl.find('input[name=second]').value
    z = x * y
    console.log "The anwer is #{z}"
  'click button[name=triger8]': (evt, tmpl)->
    x = parseInt tmpl.find('input[name=first]').value
    y = parseInt tmpl.find('input[name=second]').value
    z = x / y
    console.log "The anwer is #{z}"

Template.hello.rendered = ->


Template.body.rendered = ->




