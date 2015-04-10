Template.Home.events
  'click [name=isDone]': (e, tmpl) ->
    id = @_id
    isDone = tmpl.find('input[name=isDone]').checked
    Todos.update {_id: id},
      $set:
        isDone: isDone


Template.Home.helpers
  todos: ->
    Todos.find()

  isDoneClass: ->
    if @isDone then 'done' else ''

  isDoneChecked: ->
    if @isDone then 'checked' else ''


# Home: Lifecycle Hooks 
Template.Home.created = ->

Template.Home.rendered = ->

Template.Home.destroyed = ->
