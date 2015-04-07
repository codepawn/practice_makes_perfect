@IssuesController = RouteController.extend(
  subscriptions: ->
    @subscribe 'issues', Meteor.userId()

  data: ->
    Issues.findOne _id: @params._id

  insert: ->
    @render 'InsertIssue', {}

  list: ->
    @render 'IssuesList', {}

  edit: ->
    @render "EditIssue", {}
)
