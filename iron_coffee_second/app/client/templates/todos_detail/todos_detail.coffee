Template.TodosDetail.events
  'submit form': (e, tmpl) ->
    e.preventDefault()
    Todos.update {_id: @_id},
      $set:
        subject: tmpl.find('input[name=subject]').value
        description: tmpl.find('[name=description]').value
    Router.go 'todos.detail', _id:@_id

Template.TodosDetail.helpers
  isMyTodo: ->
    @userId is Meteor.userId()

# TodosDetail: Lifecycle Hooks 
Template.TodosDetail.created = ->

Template.TodosDetail.rendered = ->

Template.TodosDetail.destroyed = ->
