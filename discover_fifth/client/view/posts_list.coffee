postsData = [
  {
    title: 'Introducing Telescope'
    url: 'http://sachagreif.com/introducing-telescope/'
  }
  {
    title: 'Meteor'
    url: 'http://meteor.com'
  }
  {
    title: 'The Meteor Book'
    url: 'http://themeteorbook.com'
  }
]

Template.PostsList.events

Template.PostsList.helpers
  posts: postsData

Template.PostsList.created = ->

Template.PostsList.rendered = ->

Template.PostsList.destroyed = ->