Template.Main.events
  'click div[name=rm]': ->
    Todos.remove _id: @_id

  'click [name=is_done]': (evt, tmpl) ->
    id = @_id
    isDone = tmpl.find('input').checked

    Todos.update { _id: id },
      $set:
        is_done: isDone


Template.Main.helpers
  counter: ->
    Todos.find().count()

  items: ->
    Todos.find {},
      sort:
        createdAt: -1

  isDoneChecked: ->
    if @is_done then 'checked' else ''

Template.Main.created = ->

Template.Main.rendered = ->

Template.Main.destroyed = ->

