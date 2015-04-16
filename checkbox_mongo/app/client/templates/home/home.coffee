Template.Home.events
  'click [name=isDone]': (e, tmpl) ->
    Todos.update {_id: @_id},
      $set:
        isDone: e.currentTarget.checked


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
