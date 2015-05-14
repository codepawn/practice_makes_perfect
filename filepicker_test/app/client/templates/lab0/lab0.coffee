#userName = prompt 'name?'
#
#price = [
#  0.99
#  1.50
#  3.85
#]
#
#food = [
#  'chicken'
#  'pizza'
#  'hamburger'
#]
#
#userInfo=[]
#
#userInfo[0] = prompt("Which food would you like? 0. chicken 1. pizza 2. hamburger")
#userInfo[1] = prompt("How many pieces would you like to eat?")
#
#cost = price[userInfo[0]]
#total = cost * userInfo[1]
#
#console.log userName + "Your total cost for " + food[userInfo[0]] + userInfo[1] + " at $" + total





userName = prompt 'name?'

food =
  'chicken':0.99
  'pizza':1.50
  'hamburger':3.85

choice = prompt("Which food would you like? 0. chicken 1. pizza 2. hamburger")
amount = prompt("How many pieces would you like to eat?")

if choice is 0
  total = food.chicken * amount
else if choice is 1
  total = food.pizza * amount
else
  total = food.hamburger * amount

console.log userName + " Your total cost for "  + " at $" + total


Template.Lab0.events {}

Template.Lab0.helpers {}

# Lab0: Lifecycle Hooks 
Template.Lab0.created = ->

Template.Lab0.rendered = ->


Template.Lab0.destroyed = ->
