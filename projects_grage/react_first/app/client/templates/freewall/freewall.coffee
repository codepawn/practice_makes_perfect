Template.Freewall.events

Template.Freewall.helpers

# Freewall: Lifecycle Hooks 
Template.Freewall.created = ->

Template.Freewall.rendered = ->
  wall = new freewall(".container")
  wall.fixSize
    block: dna,
    width: 150,
    height: 150
  wall.fitWidth()

Template.Freewall.destroyed = ->
