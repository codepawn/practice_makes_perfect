@BooksController = RouteController.extend
  subscriptions: ->
  waitOn: ->
    Meteor.subscribe 'books'
  data: ->
  action: ->
    @render 'Books', {}

