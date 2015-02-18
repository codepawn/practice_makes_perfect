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
message =
  switch cupsOfCoffee
    when 0 then 'Asleep'
    when 1 then 'Eyes Open'
    when 2 then 'Buzzed'
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


searchLocations = (brand, cities...) ->
  "Looking for #{brand} in #{cities.join(',')}"

alert searchLocations 'Starducks', 'Orlando', 'Winter Park', 'Google'

searchLocations = (brand, cities...) ->
  "Looking for #{brand} in #{cities.join(',')}"

params = ['Starducks', 'Orlando', 'Winter Park']

alert searchLocations (params...
)

coffee =
  name: 'French'
  strength: 1
  brew: -> alert("brewing #{@name}")
  pour: (amount = 1) ->
    if amount is 1
      "Poured a single cup"
    else
      "Poured #{amount} cups"

alert coffee

coffees =
  french:
    strength: 1
    in_stock: 20
  italian:
    strength: 2
    in_stock: 12
  decaf:
    strength: 0
    in_stock: 8

alert coffees.italian.in_stock

"#{coffee} has #{attrs.in_stock}" for coffee, attrs of coffees

alert "#{coffee} #{attrs.strength} has #{attrs.in_stock}" for coffee, attrs of coffees

for coffee, attrs of coffees
  "#{coffee} has #{attrs.in_stock}"

to_print = for coffee, attrs of coffees when attrs.in_stock > 0
"#{coffee} has #{attrs.in_stock}"

$('#tabs ul li a').bind
  click: changeTab
  mouseenter: showNumberOfFlights
  mouseleave: hideNumberOfFlights

