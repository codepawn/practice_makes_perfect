Router.configure
  layoutTemplate: 'MasterLayout'
  loadingTemplate: 'Loading'
  notFoundTemplate: 'NotFound'

Router.route '/',
  name: 'home'
  controller: 'HomeController'
  action: 'action'
  where: 'client'

Router.route '/issues/:_id',
  name: 'issues:Id'
  controller: ':IdController'
  action: 'action'
  where: 'client'

Router.route 'issues_list',
  name: 'issuesList'
  controller: 'IssuesListController'
  action: 'action'
  where: 'client'

Router.route 'insert_issue',
  name: 'insertIssue'
  controller: 'InsertIssueController'
  action: 'action'
  where: 'client'