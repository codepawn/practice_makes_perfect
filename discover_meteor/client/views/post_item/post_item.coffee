# PostItem: Event Handlers and Helpers
Template.PostItem.events
  'click button[name=remove]': ->
    Postsdata.remove
      _id:this._id

Template.PostItem.helpers
  domain: ->
    a = document.createElement('a')
    a.href = this.url
    a.hostname


# PostItem: Lifecycle Hooks
Template.PostItem.created = ->

Template.PostItem.rendered = ->

Template.PostItem.destroyed = ->