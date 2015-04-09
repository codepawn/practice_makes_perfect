Template.InsertPost.events
  'submit form': (evt, tmpl)->
    evt.preventDefault()

    post =
      url: $(e.target).find('[name=url]').val()
      title: $(e.target).find('[name=title]').val()

    Meteor.call 'postInsert', post, (error, result) ->
      if error
        alert error.reason
      Router.go 'postPage', _id: result._id

Template.InsertPost.helpers

Template.InsertPost.created = ->

Template.InsertPost.rendered = ->

Template.InsertPost.destroyed = ->
