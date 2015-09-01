prices = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3,
}
stock = {
    "banana": 6,
    "apple": 0,
    "orange": 32,
    "pear": 15,
}

for key in prices:
    print key
    print "price: %s" % prices[key]
    print "stock: %s" % stock[key]

total = prices[key] * stock[key]
print total

-0.6 + 0.25 + 0.125
-1.28 + 0.625

import math
print math.pi * math.sqrt(125)
print 3 ** 5

import math
print math.pow(270, 1 / 3.0)
print math.sqrt(128)
print math.sqrt(512)

# Write your code below!
listItems = [1, 2, 3, 4, 5]


def goo():
    total = 0
    for num in listItems:
        total += num
    print total
goo()


groceries = [
    'banana',
    'orange',
    'apple'
]


shopping_list = ["banana", "orange", "apple"]

stock = {
    "banana": 6,
    "apple": 0,
    "orange": 32,
    "pear": 15
}

prices = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

def compute_bill(food):
    total = 0
    for item in food:
        if stock[item] > 0:
            total += prices[item]
            stock[item] -= 1
    return total

print compute_bill(shopping_list)
