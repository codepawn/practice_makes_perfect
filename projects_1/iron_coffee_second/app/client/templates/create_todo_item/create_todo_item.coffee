Template.CreateTodoItem.events
  'submit form': (e, tmpl)->
    e.preventDefault()

    subject = tmpl.find('input').value

    Todos.insert
      subject: subject
      createdAt: new Date
      isDone: false
      userId: Meteor.userId()

    tmpl.find('form').reset()

Template.CreateTodoItem.helpers

# CreateTodoItem: Lifecycle Hooks
Template.CreateTodoItem.created = ->

Template.CreateTodoItem.rendered = ->

Template.CreateTodoItem.destroyed = ->
