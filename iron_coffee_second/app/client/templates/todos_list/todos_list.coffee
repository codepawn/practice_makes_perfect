Template.TodosList.events
  'click [name=rm]': ->
    Todos.remove _id: @_id

  'click [name=isDone]': (e, tmpl) ->
    id = @_id
    isDone = tmpl.find('[name=isDone]').checked
    Todos.update {_id: id},
      $set:
        isDone: isDone


Template.TodosList.helpers
  todos: ->
    Todos.find {userId: Meteor.userId()},
      sort:
        createdAt: -1

  isDoneClass: ->
    if @isDone then 'done' else ''

  isDoneChecked: ->
    if @isDone then 'checked' else ''

# TodosList: Lifecycle Hooks 
Template.TodosList.created = ->

Template.TodosList.rendered = ->

Template.TodosList.destroyed = ->
