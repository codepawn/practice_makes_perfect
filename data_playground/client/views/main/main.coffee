Session.setDefault 'progressBar', 30
Session.setDefault 'progressBar3', 90
Session.setDefault 'progressBar2', 80
# Main: Event Handlers and Helpers
Template.Main.events
  'click button[name=add]': ->
    if Session.get('progressBar') > 99
      Session.set 'progressBar', 0
    else
      Session.set 'progressBar', Session.get('progressBar') + 1
  'click button[name=add2]': ->
    if Session.get('progressBar') > 99
      Session.set 'progressBar', 0
    else
      Session.set 'progressBar', Session.get('progressBar') + 5
  'click button[name=sub]': ->
    if Session.get('progressBar') < 0
      Session.set 'progressBar', 100
    else
      Session.set 'progressBar', Session.get('progressBar') - 1
  'click button[name=sub2]': ->
    if Session.get('progressBar') < 0
      Session.set 'progressBar', 100
    else
      Session.set 'progressBar', Session.get('progressBar') - 5


  'click button[name=random]': ->
    value = Math.floor(Math.random() * 100) + 1
    Session.set 'progressBar2', value

  'click button[name=random2]': ->
    value = Math.floor(Math.random() * 30) + 1
    if Session.get('progressBar3') > 99
      Session.set 'progressBar3', 0
    else
      Session.set 'progressBar3', Session.get('progressBar3') + value

Template.Main.helpers
  progress: ->
    Session.get 'progressBar'
  progress2: ->
    Session.get 'progressBar2'
  progress3: ->
    Session.get 'progressBar3'

# Example:
#   items: ->
#

# Main: Lifecycle Hooks
Template.Main.created = ->

Template.Main.rendered = ->

Template.Main.destroyed = ->

