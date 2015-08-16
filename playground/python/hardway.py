print "Hello World!"
print "Hello Again"
print "I like typing this."
print "This is fun."
print 'Yay! Printing.'
print "I'd much rather you 'not'."
print 'I "said" do not touch this.'
print "Hens", 25 + 30 / 6
print "Roosters", 100 - 25 * 3 % 4
print "Roosters", 25 * 3 % 4
print 3 + 2 + 1 - 5 + 4 % 2 - 1 / 4 + 6
# 7
name = "Spongebob Squarepants"
print "Who lives in a Pineapple under the sea? %(name)s." % locals()


end1 = "C"
end2 = "h"
end3 = "e"
end4 = "e"
end5 = "s"
end6 = "e"
end7 = "B"
end8 = "u"
end9 = "r"
end10 = "g"
end11 = "e"
end12 = "r"

# watch that comma at the end.  try removing it to see what happens
print end1 + end2 + end3 + end4 + end5 + end6,
print end7 + end8 + end9 + end10 + end11 + end12


def is_numeric(num):
    return type(num) == int or type(num) == float:

max(2, 3, 4)  # 4
min(2, 3, 4)  # 2

abs(2)  # 2
abs(-2)  # 2


def distance_from_zero(i):
    if type(i) == int or type(i) == float:
        return abs(i)
    else:
        return "Nope"


def answer():
    return 42


def wages(hours):
    return 8.35 * hours


def hotel_cost(nights):
    return 140 * nights


def plane_ride_cost(city):
    if city == 'Charlotte':
        return 183
    elif city == 'Tampa':
        return 220
    elif city == 'Pittsburgh':
        return 222
    elif city == 'Los Angeles':
        return 475
    else:
        return 'foo'


def rental_car_cost(days):
    if days >= 7:
        return days * 40 - 50
    elif days >=3:
        return days * 40 - 20
    else:
        return days * 40

def trip_cost(city,days,spending_money):
    return spending_money + rental_car_cost(days) + hotel_cost(days) + plane_ride_cost(city)


print trip_cost("Los Angeles",5,600)
