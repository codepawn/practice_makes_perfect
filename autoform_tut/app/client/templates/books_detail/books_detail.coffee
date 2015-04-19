Template.BooksDetail.events
  'click [name=rm]': ->
    Books.remove _id: @_id
    Router.go 'books'

Template.BooksDetail.helpers {}

# BooksDetail: Lifecycle Hooks 
Template.BooksDetail.created = ->

Template.BooksDetail.rendered = ->

Template.BooksDetail.destroyed = ->
