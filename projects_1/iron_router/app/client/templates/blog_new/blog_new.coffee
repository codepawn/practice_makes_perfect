Template.BlogNew.events
  'submit form': (e, tmpl)->
    e.preventDefault()
    title = tmpl.find('[name=title]').value
    body = tmpl.find('[name=body]').value
    Articles.insert {
      title: title
      body: body
      CreateAt: new Date
      author: 'google'
    }, (err, res)->
      if !err
        Router.go 'home'

Template.BlogNew.helpers {}

Template.BlogNew.created = ->

Template.BlogNew.rendered = ->

Template.BlogNew.destroyed = ->
