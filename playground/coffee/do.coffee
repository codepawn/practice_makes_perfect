do ->
  MYAPP = {}
  MYAPP.calculator =
    'left':null
    'right':null
  MYAPP.coordinate =
    'left':null
    'right':null
  MYAPP.calculator.left = 10
  MYAPP.calculator.right = 20
  sum = ->
    MYAPP.calculator.left + MYAPP.calculator.right
  alert sum()

console.log MYAPP
console.log 'goo'
