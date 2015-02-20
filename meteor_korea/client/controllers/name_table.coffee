@NameTableController = RouteController.extend(
  waitOn: ->
    Meteor.subscribe 'items'

  data: ->
    counter:
      Users.find {},
        sort:
          no: 1
      .fetch()

  action: ->
    @render()
    return
)
