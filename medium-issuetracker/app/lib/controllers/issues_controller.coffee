@IssuesController = RouteController.extend(
  subscriptions: ->
    @subscribe 'issues', Meteor.userId()

  data: ->
    Issues.findOne _id:@params._id
  edit: ->
    @render 'EditIssue', {}
  insert: ->
    @render 'InsertIssue', {}
  list: ->
    @render 'IssuesList', {}
)
