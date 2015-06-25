Template.N3.events
  'click [name=rm]': ->
    Sort.remove @_id

Template.N3.helpers
  sort: ->
    Sort.find {}, {
      sort:
        number: 1
    }

# N3: Lifecycle Hooks 
Template.N3.created = ->

Template.N3.rendered = ->
#  for i in [1..5]
#    console.log "a \n \n#{i}"

Template.N3.destroyed = ->
