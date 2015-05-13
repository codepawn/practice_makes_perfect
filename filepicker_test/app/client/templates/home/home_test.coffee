#member = [
#  'egoing'
#  'k8805'
#  'sorialgi'
#]
#
#console.log member

#grades =
#  'list':
#    'egoing': 10
#    'k8805': 8
#    'sorialgi': 80
#  'show': ()->
#    console.log @list
#
#grades.show()

#welcome = ->
#  'Hello world'
#alert welcome()

#vscope = 'global'
#
#fscope = ->
#  var vscope = 'local'
#
#fscope()
#console.log vscope

#
#vscope = 'global'
#
#fscope = ->
#  console.log vscope
#fscope2 = ->
#  console.log vscope
#
#fscope()
#fscope2()

process = [
  (input) ->
    input + 10
  (input) ->
    input * input
  (input)->
    input / 2
]

for i in [0..2]
  final = process[i](input)

alert final