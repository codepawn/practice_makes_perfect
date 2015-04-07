Router.configure
  layoutTemplate: 'MasterLayout'
  loadingTemplate: 'Loading'
  notFoundTemplate: 'NotFound'

Router.onBeforeAction (->
  if !Meteor.user()
    @render 'AccessDenied'
  else
    console.log "onBeforeActionWorks"
    @next()
), only: [
  'issuesList'
  'insertIssue'
]

Router.route '/',
  name: 'home'
  controller: 'HomeController'
  action: 'action'
  where: 'client'

Router.route '/issues/:_id',
  name: 'editIssue'
  controller: ':IssuesController'
  action: 'edit'
  where: 'client'

Router.route 'issues_list',
  name: 'issuesList'
  controller: 'IssuesController'
  action: 'list'
  where: 'client'

Router.route 'insert_issue',
  name: 'insertIssue'
  controller: 'IssuesController'
  action: 'insert'
  where: 'client'