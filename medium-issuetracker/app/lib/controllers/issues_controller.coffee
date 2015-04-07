@IssuesController = RouteController.extend(
  subscriptions: ->
    @subscribe 'issues'

  data: ->
  edit: ->
    @render 'InsertIssue', {}
  insert: ->
    @render 'InsertIssue', {}
  list: ->
    @render 'IssuesList', {}
)
