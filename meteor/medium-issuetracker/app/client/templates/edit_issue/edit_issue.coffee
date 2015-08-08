Template.EditIssue.events


Template.EditIssue.helpers
  beforeRemove: ->
    (collection, id)->
      doc = collection.findOne(id)
      if confirm('Really delete issue:' + doc.title + '?')
        @remove()
        Router.go 'issuesList'

# EditIssue: Lifecycle Hooks 
Template.EditIssue.created = ->

Template.EditIssue.rendered = ->

Template.EditIssue.destroyed = ->

AutoForm.addHooks null, onSuccess: (operation, result, template) ->
  Router.go 'issuesList'