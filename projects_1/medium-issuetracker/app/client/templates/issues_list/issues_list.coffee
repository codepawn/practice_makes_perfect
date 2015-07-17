Template.IssuesList.events

Template.IssuesList.helpers
  issues: ->
    Issues.find()

  dueDateFormatted: ->
    moment @dueDate
    .format 'MMM Do YY'

  priorityHigh: ->
    if @priority is 'High'
      true
    else
      false
  priorityMedium: ->
    if @priority is 'Medium'
      true
    else
      false
  priorityLow: ->
    if @priority is 'Low'
      true
    else
      false


# IssuesList: Lifecycle Hooks 
Template.IssuesList.created = ->

Template.IssuesList.rendered = ->

Template.IssuesList.destroyed = ->
