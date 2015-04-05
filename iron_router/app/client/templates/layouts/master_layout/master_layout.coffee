Template.MasterLayout.helpers
  isBlogActive: ->
    if Session.get 'active1' then 'active' else ''
  isArticleActive: ->
    if Session.get 'active2' then 'active' else ''
Template.MasterLayout.events
  'click [name=blog]': (e) ->
    e.preventDefault()
    Session.set 'active1', true
    Session.set 'active2', false

  'click [name=article]': ->
    Session.set 'active1', false
    Session.set 'active2', true
