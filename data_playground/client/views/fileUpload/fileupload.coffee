
# Meteordefault: Event Handlers and Helpers
Template.FileUpload.events

  'submit form': (evt,tmpl) ->
    evt.preventDefault()

    fileInput = tmpl.find('input[type=file]')
    form = evt.currentTarget;



Template.FileUpload.helpers



# FileUpload: Lifecycle Hooks
Template.FileUpload.created = ->

Template.FileUpload.rendered = ->

Template.FileUpload.destroyed = ->