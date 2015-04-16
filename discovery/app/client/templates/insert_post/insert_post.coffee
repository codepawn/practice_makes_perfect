Template.InsertPost.events
  'submit form': (evt, tmpl)->
    evt.preventDefault()

    Posts.insert
      url: $(evt.target).find('[name=url]').val()
      title: $(evt.target).find('[name=title]').val()

#    Meteor.call 'postInsert', post, (error, result) ->
#      if error
#        alert error.reason

    Router.go 'postPage', _id: result._id

Template.InsertPost.helpers

Template.InsertPost.created = ->

Template.InsertPost.rendered = ->

Template.InsertPost.destroyed = ->
