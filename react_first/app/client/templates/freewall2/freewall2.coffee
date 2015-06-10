Template.Freewall2.events {}

Template.Freewall2.helpers {}

# Freewall2: Lifecycle Hooks 
Template.Freewall2.created = ->
  
Template.Freewall2.rendered = ->
  colour = [
    'rgb(142, 68, 173)'
    'rgb(243, 156, 18)'
    'rgb(211, 84, 0)'
    'rgb(0, 106, 63)'
    'rgb(41, 128, 185)'
    'rgb(192, 57, 43)'
    'rgb(135, 0, 0)'
    'rgb(39, 174, 96)'
  ]
  $('.free-wall .size320').each ->
    backgroundColor = colour[colour.length * Math.random() << 0]
    bricks = $(this).find('.brick')
    !bricks.length and (bricks = $(this))
    bricks.css backgroundColor: backgroundColor

  $ ->
  $('.free-wall').each ->
    wall = new freewall(this)
    wall.reset
      selector: '.size320'
      cellW: (container) ->
        cellWidth = 320
        if container.hasClass('size320')
          cellWidth = container.width() / 2
        cellWidth
      cellH: (container) ->
        cellHeight = 320
        if container.hasClass('size320')
          cellHeight = container.height() / 2
        cellHeight
      fixSize: 0
      gutterY: 20
      gutterX: 20
      onResize: ->
        wall.fitWidth()
        return
    wall.fitWidth()
    return
  $(window).trigger 'resize'
  return
Template.Freewall2.destroyed = ->
