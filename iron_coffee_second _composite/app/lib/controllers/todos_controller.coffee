@TodosController = RouteController.extend
  subscriptions: ->
    Meteor.subscribe 'todo', @params._id

  data: ->
    Todos.findOne _id: @params._id

  detail: ->
    @render 'TodosDetail', {}

  edit: ->
    @state.set 'isEditing', true
    @render 'TodosDetail', {}