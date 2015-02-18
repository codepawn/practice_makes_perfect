coffee = (message = 'Ready for some Coffee?', other = '2') ->
  answer = confirm message
  alert "Your answer is #{answer} #{other}"

coffee('g?')

age = 8
if age < 18
  alert 'under age'

age = 8
if age < 18 then alert 'under age'

age = 20
alert 'under age' if age < 18

age = 20
if age < 18
  alert 'Under age'
else
  alert

age = 20
if age < 18 then alert 'Under age' else alert 'Hahaha Over age!'

newLever = 2
if 2 < newLever < 9
  alert "In Range"
else
  alert "It's Over"

cupsOfCoffee = 4
message = switch cupsOfCoffee
when
0
then
'Asleep'
when
1
then
'Eyes Open'
when
2
then
'Buzzed'
else
'Dangerous'
alert message

if cupsOfCoffee?
  alert 'it exists!'
else
  alert 'nope'

cupsOfCoffee = 4
if not cupsOfCoffee?
  cupsOfCoffee = 0
  alert "none #{cupsOfCoffee}"
else
  alert "exist #{cupsOfCoffee}"

cupsOfCoffee = 4
cupsOfCoffee = 0 unless cupsOfCoffee?
alert cupsOfCoffee


cupsOfCoffee ? = 0
alert cupsOfCoffee

unless gee?
  alert 'none'
else
  alert 'exist'

range = [1..4]
alert range

start = 5
end = 10
range = [start..end]
alert range
alert range[1..4]
alert range[1...range.length]
alert range[1..-1]

storeLocations = ['Orlando', 'Winter Park', 'Sanford']
storeLocations = [
  'Orlando'
  'Winter Park'
  'Sanford'
]

storeLocations.forEach (location, index) ->
  alert "Location: #{location} #{index}"

for location in storeLocations
  alert "Location: #{location}"

alert "Location: #{location}" for location in storeLocations

alert "#{loc}, FL" for loc in storeLocations

storeLocations = [
  'Orlando'
  'Winter Park'
  'Sanford'
  'Google'
]

newLocs = []
alert newLocs

for loc in storeLocations
  newLocs.push loc if loc isnt 'Sanford'

alert newLocs

newLocs = (loc for loc in storeLocations when loc isnt 'Sanford')

alert newLocs

