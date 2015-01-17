# MasterLayout: Event Handlers and Helpers
Template.MasterLayout.events
# Example:
#  "click .selector": (e, tmpl) ->
#
  'click li[id=add]': ->
    Postsdata.insert
      title: 'Meteor Docs'
      url: 'http://docs.meteor.com'
      createdAt: new Date

Template.MasterLayout.helpers
# Example:
#   items: ->
#

# MasterLayout: Lifecycle Hooks
Template.MasterLayout.created = ->

Template.MasterLayout.rendered = ->

Template.MasterLayout.destroyed = ->