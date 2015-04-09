Template.InsertPost.events
  'submit form': (evt, tmpl)->
    evt.preventDefault()
    url = tmpl.find '#url'
    .value
    title = tmpl.find '[name=title]'
    .value
    Posts.insert
      title: title
      url: url
    console.log "Sucsses!"
    tmpl.find 'form'
    .reset()
    Router.go 'home'

Template.InsertPost.helpers {}

# InsertPost: Lifecycle Hooks 
Template.InsertPost.created = ->

Template.InsertPost.rendered = ->

Template.InsertPost.destroyed = ->
