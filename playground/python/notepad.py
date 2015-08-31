
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
    elif days >= 3:
        return days * 40 - 20
    else:
        return days * 40


def trip_cost(city, days, spending_money):
    return spending_money + rental_car_cost(days) + hotel_cost(days) + plane_ride_cost(city)

print trip_cost('Los Angeles', 5, 600)

zoo_animals = ["pangolin", "cassowary", "sloth", ]
# One animal is missing!

if len(zoo_animals) > 3:
    print "The first animal at the zoo is the " + zoo_animals[0]
    print "The second animal at the zoo is the " + zoo_animals[1]
    print "The third animal at the zoo is the " + zoo_animals[2]
    print "The fourth animal at the zoo is the " + zoo_animals[3]

zoo_animals = ["pangolin", "cassowary", "sloth", "tiger"]
# Last night our zoo's sloth brutally attacked
# the poor tiger and ate it whole.

# The ferocious sloth has been replaced by a friendly hyena.
zoo_animals[2] = "hyena"

# What shall fill the void left by our dear departed tiger?
# Your code here!


suitcase = []
suitcase.append("sunglasses")

# Your code here!
suitcase.append('socks')
suitcase.append('macbook')
suitcase.append('iphone')

list_length = len(suitcase)  # Set this to the length of suitcase

print "There are %d items in the suitcase." % (list_length)
print suitcase


suitcase = ["sunglasses", "hat", "passport", "laptop", "suit", "shoes"]

first = suitcase[0:2]  # The first and second items (index zero and one)
middle = suitcase[2:4]  # Third and fourth items (index two and three)
last = suitcase[4:6]  # The last two items (index four and five)

print first
print middle
print last

animals = "catdogfrog"
cat = animals[:3]   # The first three characters of animals
dog = animals[3:6]             # The fourth through sixth characters
frog = animals[6:]               # From the seventh character to the end
print frog

animals = ["aardvark", "badger", "duck", "emu", "fennec fox"]
duck_index = animals.index('duck')
animals.insert(duck_index, 'cobra')
print animals  # Observe what prints after the insert operation

my_list = [1, 9, 3, 8, 5, 7]
my_list.sort()
print my_list
for number in my_list:
    # Your code here

start_list = [5, 3, 1, 2, 4]
square_list = []

# Your code here!


print square_list

animals = ["cat", "ant", "bat"]
animals.sort()
for animal in animals:
    return animal
print animal


start_list = [5, 3, 1, 2, 4]
square_list = []

# Your code here!
for num in start_list:
    square_list.append(num ** 2)

square_list.sort()
print square_list

# Assigning a dictionary with three key-value pairs to residents:
residents = {
    'Puffin': 104,
    'Sloth': 105,
    'Burmese Python': 106
}

print residents['Puffin']  # Prints Puffin's room number

# Your code here!

print residents['Sloth']
print residents['Burmese Python


menu = {}  # Empty dictionary
menu['Chicken Alfredo'] = 14.50  # Adding new key-value pair
print menu['Chicken Alfredo']
print menu
# Your code here: Add some dish-price pairs to menu!

print "There are " + str(len(menu)) + " items on the menu."
print menu


# key - animal_name : value - location
zoo_animals = {
    'Unicorn': 'Cotton Candy House',
    'Sloth': 'Rainforest Exhibit',
    'Bengal Tiger': 'Jungle House',
    'Atlantic Puffin': 'Arctic Exhibit',
    'Rockhopper Penguin': 'Arctic Exhibit'
}
# A dictionary (or list) declaration may break across multiple lines

# Removing the 'Unicorn' entry. (Unicorns are incredibly expensive.)
del zoo_animals['Unicorn']

# Your code here!
del zoo_animals['Sloth']
del zoo_animals['Bengal Tiger']
zoo_animals['Rockhopper Penguin'] = 'foo'

print zoo_animals


backpack = ['xylophone', 'dagger', 'tent', 'bread loaf']
backpack.remove('dagger')
print backpack


3 / 6
16 24 32 40 48 56
63 72


def gcf(first, second):
    total = []
    total2 = []
    for num in range(2, first + 1):
        if first % num == 0:
            total.append(num)
    print total
    for num in range(2, second + 1):
        if second % num == 0:
            total2.append(num)
    print total2

    for num in total:
        for num2 in total2:
            if num == num2:
                print num
gcf(15, 11)

98000.007

inventory = {
    'gold': 500,
    # Assigned a new list to 'pouch' key
    'pouch': ['flint', 'twine', 'gemstone'],
    'backpack': ['xylophone', 'dagger', 'bedroll', 'bread loaf']
}

# Adding a key 'burlap bag' and assigning a list to it
inventory['burlap bag'] = ['apple', 'small ruby', 'three-toed sloth']

# Sorting the list found under the key 'pouch'
inventory['pouch'].sort()

# Your code here
inventory['pocket'] = ['seashell', 'strange berry', 'lint']
inventory['backpack'].sort()

inventory['backpack'].remove('dagger')

inventory['gold'] = 50
print inventory['gold']

names = ["Adam", "Alex", "Mariah", "Martine", "Columbus"]

for item in names:
    print item

webster = {
	"Aardvark": "A star of a popular children's cartoon show.",
    "Baa": "The sound a goat makes.",
    "Carpet": "Goes on the floor.",
    "Dab": "A small amount."
}

# Add your code below!
for key in webster:
    print webster[key]


a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

for item in a:
    if item % 2 == 0:
        print item

def count_small(numbers):
    total = 0
    for n in numbers:
        if n < 10:
            total = total + 1
    return total

lost = [4, 8, 15, 16, 23, 42]
small = count_small(lost)
print small


def count_small(numbers):
    total = 0
    for n in numbers:
        if n < 10:
            total += 1
    return total

lost = [4, 8, 15, 16, 23, 42]
small = count_small(lost)
print small

def fizz_count(x):
    count = 0
    for item in x:
        if 'fizz' == item:
            count += 1
    return count

print fizz_count(["fizz", "cat", "fizz"])

for letter in "Codecademy":
    print letter

# Empty lines to make the output pretty
print
print

word = "Programming is fun!"

for letter in word:
    # Only print out the letter i
    if letter == "i":
        print letter

animal_counts = {
    'ant': 3,
    'bear': 6,
    'crow': 2
}

price = {
    'banana': 4,
    'apple': 2,
    'orange': 1.5,
    'pear': 3
}

stock = {
    'banana': 6,
    'apple': 0,
    'orange': 32
    'pear': 15
}
