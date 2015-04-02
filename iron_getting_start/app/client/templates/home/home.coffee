Template.Home.events
  'click [name=remove]': ->
    Todos.remove _id: @_id

  'submit form': (e, tmpl) ->
    e.preventDefault()
    Todos.insert
      subject: tmpl.find('[name=todoInput]').value
      is_done: false
    tmpl.find('form').reset()

  'click [name=is_done]': (e, tmpl)->
    Todos.update {_id: @_id},
      $set:
        is_done: tmpl.find('[name=is_done]').checked


Template.Home.helpers
  items: ->
    Todos.find()

  isDoneCheck: ->
    if @is_done then 'checked' else ''

# Home: Lifecycle Hooks 
Template.Home.created = ->

Template.Home.rendered = ->

Template.Home.destroyed = ->
