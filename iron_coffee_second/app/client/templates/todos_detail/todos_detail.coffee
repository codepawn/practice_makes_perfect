Template.TodosDetail.events
  'submit form#edit-todo': (e, tmpl) ->
    e.preventDefault()
    Todos.update {_id: @_id},
      $set:
        subject: tmpl.find('input[name=subject]').value
        description: tmpl.find('[name=description]').value
        updatedAt: new Date
    Router.go 'todos.detail', _id: @_id

Template.TodosDetail.helpers
  isMyTodo: ->
    @userId is Meteor.userId()

  user: ->
    Meteor.users.findOne _id: @userId

# TodosDetail: Lifecycle Hooks
Template.TodosDetail.created = ->

Template.TodosDetail.rendered = ->

Template.TodosDetail.destroyed = ->
