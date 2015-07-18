Template.hello.events
  'click button[name=addCounter]': ->
    Session.set 'counter', Session.get('counter') + 1

Template.hello.helpers
  'counter': ->
    Session.get 'counter'

Template.hello.rendered = ->
  Session.setDefault 'counter', 0

  Session.set 'e', Session.get 'g' +1