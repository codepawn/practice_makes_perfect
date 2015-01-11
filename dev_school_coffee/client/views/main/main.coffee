# Main: Event Handlers and Helpers
Template.Main.events


# Example:
#  "click .selector": (e, tmpl) ->
#

Template.Main.helpers

  list: ->
    arr = [
      {no: 1, name: '박승현',email:'awefwae@awef.com'}
      {no: 3, name: '전지현',email:'awefwae@awef.com'}
      {no: 4, name: '김완선',email:'awefwae@awef.com'}
      {no: 2, name: '카라',email:'awefwae@awef.com'}
      {no: 5, name: '구글',email:'awefwae@awef.com'}
    ]
    arr =
# Example:
#   items: ->
#

# Main: Lifecycle Hooks
Template.Main.created = ->

Template.Main.rendered = ->

Template.Main.destroyed = ->