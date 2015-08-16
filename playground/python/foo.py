# my_int is set to 7 below. What do you think
# will happen if we reset it to 3 and print the result?

my_int = 7

# Change the value of my_int to 3 on line 8!

my_int = 3

# Here's some code that will print my_int to the console:
# The print keyword will be covered in detail soon!

print my_int


def spam():
    eggs = 12
    return eggs

print spam()

# whatever
monty = True
python = 1.234
monty_python = python**2

# Assign the variable meal the value 44.50 on line 3!

meal = 44.50
a = meal % 6.75
print a


def speak(message):
    return message


def shut_down(s):
    if s == "yes":
        return "Shutting down"
    elif s == "no":
        return "Shutdown aborted"
    else:
        return "Sorry"

if happy():
    speak("I'm happy!")
elif sad():
    speak("I'm sad.")
else:
    speak("I don't know what I'm feeling.")

from math import sqrt

print sqrt(13689)


def is_numeric(num):
    return type(num) == int or type(num) == float:

print max(2, 3, 4)  # 4
print min(2, 3, 4)  # 2

print abs(2)  # 2
abs(-2)  # 2


def cal(arg1, arg2):
    value1 = []
    value2 = []
    for num in range(1,arg2):
        if arg1 % num == 0:
            value1.push(num)
    for num in range(1,arg2):
        if arg2 % num == 0:
            value2.push(num)
    print value1
    print value2
cal(24, 6)
