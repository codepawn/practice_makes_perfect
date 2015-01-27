Template.PostsItem.events
  'click button[name=remove]': ->
    Postsdata.remove
    _id: this._id

Template.PostsItem.helpers
  domain: ->
    a = document.createElement('a')
    a.href = this.url
    a.hostname
