@BooksEditController = RouteController.extend
  subscriptions: ->
  waitOn: ->
    Meteor.subscribe 'book', @params._id

  data: ->
    Books.findOne _id: @params._id
  action: ->
    @render 'BooksEdit', {}
  home: ->
    @state.set 'fromHome', true
    @render 'BooksEdit', {}
