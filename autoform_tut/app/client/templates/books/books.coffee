Template.Books.events
  'click [name=rm]': ->
    Books.remove _id: @_id

Template.Books.helpers
  books: ->
    Books.find()


# Books: Lifecycle Hooks 
Template.Books.created = ->

Template.Books.rendered = ->

Template.Books.destroyed = ->
