Template.UsersDetail.events {}

Template.UsersDetail.helpers
  todos: ->
    Todos.find userId: @_id,
      sort:
        createAt: -1

# UsersDetail: Lifecycle Hooks 
Template.UsersDetail.created = ->

Template.UsersDetail.rendered = ->

Template.UsersDetail.destroyed = ->
