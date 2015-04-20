Template.BooksDetail.events
  'click [name=rm]': (e)->
    e.preventDefault()
    Books.remove _id: @_id
    Router.go 'books'

Template.BooksDetail.helpers

Template.BooksDetail.created = ->

Template.BooksDetail.rendered = ->

Template.BooksDetail.destroyed = ->
