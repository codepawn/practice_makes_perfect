Meteor.startup ->
    loadFilePicker('AjKDH1VmIRpOkieA95PsZz')
#
# Client App Namespace
#
_.extend App, {}

App.helpers = {}

_.each App.helpers, (helper, key) ->
  Handlebars.registerHelper key, helper
  return