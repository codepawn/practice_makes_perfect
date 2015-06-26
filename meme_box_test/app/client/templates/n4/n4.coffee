Template.N4.events

Template.N4.helpers

# N4: Lifecycle Hooks 
Template.N4.created = ->
  
Template.N4.rendered = ->
  for i in [1..86400]
    r =+ i
  console.log r
  console.log 60*60*24
  
Template.N4.destroyed = ->
