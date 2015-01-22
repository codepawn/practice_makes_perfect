# PostItem: Event Handlers and Helpers
Template.PostsList.events
  'click button[name=remove]': ->
    Postsdata.remove
      _id: this._id

Template.PostsList.helpers
  domain: ->
    a = document.createElement('a')
    a.href = this.url
    a.hostname
