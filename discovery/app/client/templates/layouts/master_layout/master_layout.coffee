Template.MasterLayout.helpers
  pageTitle: ->
    Session.get 'pageTitle'

Template.MasterLayout.events {}


#Tracker.autorun ->
#  alert Session.get('message')