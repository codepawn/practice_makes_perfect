Template.UsersList.events

Template.UsersList.helpers
  users: ->
    Meteor.users.find _id:
      $ne: Meteor.userId()



# UsersList: Lifecycle Hooks 
Template.UsersList.created = ->

Template.UsersList.rendered = ->

Template.UsersList.destroyed = ->
