# Assign True or False as appropriate on the lines below!

# Set this to True if 17 < 328 or to False if it is not.
bool_one = True   # We did this one for you!

# Set this to True if 100 == (2 * 50) or to False otherwise.
bool_two = if 100 == (2 * 50)
print bool_two
# Set this to True if 19 <= 19 or to False if it is not.
bool_three =

# Set this to True if -22 >= -18 or to False if it is not.
bool_four =

# Set this to True if 99 != (98 + 1) or to False otherwise.
bool_five =


def clinic():
  print "You've just entered the clinic!"
  print "Do you take the door on the left or the right?"
  answer = raw_input("Type left or right and hit 'Enter'.").lower()
  if answer == "left" or answer == "l":
    print "This is the Verbal Abuse Room, you heap of parrot droppings!"
  elif answer == "right" or answer == "r":
    print "Of course this is the Argument Room, I've told you that already!"
  else:
    print "You didn't pick left or right! Try again."
    clinic()

clinic()


print "Welcome to Python!"

my_variable = 10
spam = 5

print my_variable


def spam():
  eggs = 12
  return eggs

print spam()
# print spam()

"""goo"""


count_to = 892 + 234

print count_to

eggs = 10 ** 2

print eggs

spam = 5 % 2

print spam

monty = True
python = 1.234
monty_python = python ** 2

print monty_python

meal = 44.50
tax = meal % 6.75
print tax


# Assign the variable total on line 8!

meal = 44.50
tax = 0.0675
tip = 0.15

meal = meal + meal * tax
total = meal + meal * tip

print(total)
print("%.2f" % total)
print("%.2f")


"""
The string "PYTHON" has six characters,
numbered 0 to 5, as shown below:

+---+---+---+---+---+---+
| P | Y | T | H | O | N |
+---+---+---+---+---+---+
  0   1   2   3   4   5

So if you wanted "Y", you could just type
"PYTHON"[1] (always start counting from 0!)
"""
fifth_letter = "MONTY"[4]

print fifth_letter


"""Assign the variable parrot on line 4,
then call len() on parrot on line 5!"""
parrot = "Norwegian Blue"

print len(parrot)

"""Declare and assign your variable on line 4,
then call your method on line 5!"""

pi = 3.14
print str(pi)
print pi

# Turn 3.14 into a string on line 3!

print "The value of pi is around " + "3.14"

print "I have " + str(2) + " coconuts!"

string_1 = "Camelot"
string_2 = "place"

print "Let's not go to %s. 'Tis a silly %s." % (string_1, string_2)

name = raw_input("What is your name?")
quest = raw_input("What is your quest?")
color = raw_input("What is your favorite color?")

print "Ah, so your name is %s, your quest is %s, " \
    "and your favorite color is %s." % (name, quest, color)

from datetime import datetime

now = datetime.now()
print now

from datetime import datetime

now = datetime.now()
print now
print now.month
print now.year
print now.day

from datetime import datetime
now = datetime.now()

print '%s/%s/%s' % (now.month, now.day, now.year)


# Assign True or False as appropriate on the lines below!

# Set this to True if 17 < 328 or to False if it is not.
bool_one = True   # We did this one for you!

# Set this to True if 100 == (2 * 50) or to False otherwise.
bool_two = 100 == (2 * 50)
print bool_two
# Set this to True if 19 <= 19 or to False if it is not.
bool_three = 19 <= 19

# Set this to True if -22 >= -18 or to False if it is not.
bool_four = -22 >= -18

# Set this to True if 99 != (98 + 1) or to False otherwise.
bool_five = 99 != (98 + 1)

# Assign True or False as appropriate on the lines below!

# (20 - 10) > 15
bool_one = False    # We did this one for you!

# (10 + 17) == 3**16
# Remember that ** can be read as 'to the power of'. 3**16 is about 43 million.
bool_two = (10 + 17) == 3**16

# 1**2 <= -1
bool_three = 1**2 <= -1

# 40 * 4 >= -4
bool_four = 40 * 4 >= -4

# 100 != 10**2
bool_five = 100 != 10**2


# Create comparative statements as appropriate on the lines below!

# Make me true!
bool_one = 3 < 5  # We already did this one for you!

# Make me false!
bool_two = 3 * 4 == 33

# Make me true!
bool_three = 99 == 99
# Make me false!
bool_four = 3**3 == 3

# Make me true!
bool_five = 32 > 3

bool = True and True
bool = True == True
print bool

bool_one = False and False

bool_two = -(-(-(-2))) == -2 and 4 >= 16**0.5

bool_three = 19 % 4 != 300 / 10 / 10 and False

bool_four = -(1**2) < 2**0 and 10 % 10 <= 20 - 10 * 2

bool_five = True and True


foo = 19 % 4 != 300 / 10 / 10
print foo


bool_one = 2**3 == 108 % 100 or 'Cleese' == 'King arthour'
# False
bool_two = True or False
# True
bool_three = 100**0.5 >= 50 or False
# False
bool_four = True or True
# True
bool_five = 1**100 == 100**1 or 3 * 2 * 1 != 3 + 2 + 1
# False

bool_one = not True
# False
bool_two = not 3**4 < 4**3
# True
bool_three = not 10 % 3 <= 10 % 2
# True
bool_four = not 3**2 + 4**2 != 5**2
# True
bool_five = not not False
# True

bool_one = False or not True
# False
bool_two = False and not True or True
# False
bool_three = True and not (False or False)
# True
bool_four = not not True or (True and True)
# False
bool_five = False or not (True and True)
# True

# Use boolean expressions as appropriate on the lines below!

# Make me false!
bool_one = (2 <= 2) and "Alpha" == "Bravo"  # We did this one for you!
# Make me true!
bool_two = 2 > 3 or 3 > 2
# False
# Make me false!
bool_three = False and 'foo' == 'foo'
# True
# Make me true!
bool_four = True and not False
# True
# Make me true!
bool_five = True or "goo" == "foo"
# True

response = 'y'

if response == "y":
  print ""
else:
  print 'g'
# Will the above print statement print to the console?
# Set response to 'Y' if you think so, and 'N' if you think not.


def using_control_once():
  if True:
    return "Success #1"


def using_control_again():
  if True:
    return "Success #2"

print using_control_once()
print using_control_again()


answer = "'Tis but a scratch!"


def black_knight():
  if answer == "'Tis but a scratch!":
    return True
  else:
    return False


def french_soldier():
  if answer == "Go away, or I shall taunt you a second time!":
    return True
  else:
    return False


def greater_less_equal_5(answer):
  if answer > 5:
    return 1
  elif answer < 5:
    return -1
  else:
    return 0

print greater_less_equal_5(4)
print greater_less_equal_5(5)
print greater_less_equal_5(6)


def the_flying_circus():
  if 3 > 2 and 5 > 8:
    print 'asdf'
  elif 3 > 2 or False:
    print 'asdf2'
  else:
    print 'asdf3'
  return True
print the_flying_circus()

print 'Pig Latin'

name = raw_input("What's your name?")
print name

original = raw_input("Enter a word:")
if len(original) > 0:
  print original
else:
  print "empty"

print 'Welcome to the Pig Latin Translator!'

# Start coding here!
original = raw_input("Enter a word:")
if len(original) > 0 and original.isalpha():
  print original
else:
  print "empty"

pyg = 'ay'

original = raw_input("Enter a word:")
if len(original) > 0 and original.isalpha():
  word = original.lower()
  first = word[0]
  new_word = word + first + pyg
  new_word = new_word[1:len(new_word)]
  print original
else:
  print "empty"


word = "google"

print word[1:len(word)]


def tax(bill):
  bill *= 1.08
  print "With tax: %f" % bill
  return bill


def tip(bill):
  bill *= 1.15
  print "With tip: %f" % bill
  return bill

meal_cost = 100
meal_with_tax = tax(meal_cost)
meal_with_tip = tip(meal_with_tax)

# Define your spam function starting on line 5. You
# can leave the code on line 11 alone for now--we'll
# explain it soon!


def spam():
  """ Prints Eggs!"""
  print "Eggs!"


# Define the spam function above this line.
spam()


def square(n):
  """Returns the square of a number."""
  squared = n**2
  print "%d squared is %d." % (n, squared)
  return squared

# Call the square function on line 9! Make sure to
# include the number 10 between the parentheses.

square(10)


def power(base, exponent):  # Add your parameters here!
  result = base**exponent
  print "%d to the power of %d is %d." % (base, exponent, result)

power(37, 4)  # Add your arguments here!


def one_good_turn(n):
  return n + 1


def deserves_another(n):
  return one_good_turn(n) + 2


def cube(number):
  return number * number * number

def by_three(number):
  if(number % 3 == 0):
    return cube(number)
  else:
    return False

from math import *

print sqrt(25)

import math            # Imports the math module
everything = dir(math) # Sets everything to a list of things from math
print everything       # Prints 'em all!
