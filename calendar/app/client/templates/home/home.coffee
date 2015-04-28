Template.Home.events {}

Template.Home.helpers {}

# Home: Lifecycle Hooks 
Template.Home.created = ->

Template.Home.rendered = ->
  calendar = $('#calendar').fullCalendar(dayClick: (date, allDay, jsEvent, view) ->
    calendarEvent = {}
    calendarEvent.start = date
    calendarEvent.title = 'New Event'
    calendarEvent.owner = Meteor.userId()
    Meteor.call 'saveCalEvent', calendarEvent
  )

Template.Home.destroyed = ->
