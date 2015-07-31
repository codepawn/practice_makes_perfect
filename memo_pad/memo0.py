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
