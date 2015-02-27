Template.body.events

Template.body.helpers

Template.body.created = ->

Template.body.rendered = ->
  $.backstretch [
      'humew_front.jpg'
      'humew_front2.jpg'
      'humew_front3.jpg'
      'humew_front4.jpg'
    ],
    duration: 4000
    fade: 750

Template.body.destroyed = ->