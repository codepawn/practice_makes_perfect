Template.Home.events {}

Template.Home.helpers {}

# Home: Lifecycle Hooks 
Template.Home.created = ->

Template.Home.rendered = ->
  calendar = $('#calendar').fullCalendar()

Template.Home.destroyed = ->
