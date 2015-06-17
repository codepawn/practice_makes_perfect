Template.Home.events
  'keyup [name=xValue]': (e, tmpl)->
    console.log parseInt(e.currentTarget.value)
    Session.set 'xValue', parseInt(e.currentTarget.value)

  'keyup [name=yValue]': (e, tmpl)->
    console.log parseInt(e.currentTarget.value)
    Session.set 'yValue', parseInt(e.currentTarget.value)

    $('[name=matrixTextArea').val(e.currentTarget.value)

  'click [name=checkToggle]': ->
    console.log "toggleClicked"

Template.Home.helpers
  'matrixValue': ->
    "X is Set #{Session.get 'xValue'} And Y is Set #{Session.get 'yValue'} \n next"

    spiral_value = (x, y, n) ->
      prior_legs =
        N: 0
        E: 1
        S: 2
        W: 3

      edge_run = (edge_offset) ->
        N: ->
          edge_offset.W - edge_offset.N
        E: ->
          edge_offset.N - edge_offset.E
        S: ->
          edge_offset.E - edge_offset.S
        W: ->
          edge_offset.S - edge_offset.W

      edge_offset =
        N: y
        E: n - 1 - x
        S: n - 1 - y
        W: x

      min_edge_offset = n
      for dir of edge_offset
#        console.log edge_offset[dir]
        console.log min_edge_offset
        if edge_offset[dir] < min_edge_offset
          min_edge_offset = edge_offset[dir]
          border = dir

      inner_square_edge = n - 2 * min_edge_offset
      corner_offset = n * n - inner_square_edge * inner_square_edge
      corner_offset += prior_legs[border] * (inner_square_edge - 1)
      corner_offset + edge_run(edge_offset)[border]()

    spiral_matrix = (a, b) ->
      for y in [0...a]
        for x in [0...b]
          spiral_value x, y, a

#    spiral_matrix 3, 3

  'xValue': ->
    Session.get 'xValue'
  'yValue': ->
    Session.get 'yValue'

  'checked': ->
    if Session.get 'checked' then 'checked' else ''

Template.Home.created = ->
  Session.setDefault 'xValue', 6
  Session.setDefault 'yValue', 5
  Session.setDefault 'checked', true

Template.Home.rendered = ->
  $('.ui.checkbox').checkbox()

Template.Home.destroyed = ->