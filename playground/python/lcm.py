def lcm(x, y):
    if x > y:
        greater = x
    else:
        greater = y
    while(True):
        if((greater % x == 0) and (greater % y == 0)):
            lcm = greater
            break
        greater += 1
    return lcm
print lcm(7, 12)

12 18 24 30 36 42
14 21 28 35 42

60 95 65 100 65


def average(arr):
    total = 0
    result = 0
    for i in range(len(arr)):
        total += arr[i]
    print "Total", total
    result = total / len(arr)
    print "Average", result

average([70, 95, 65, 75, 75])
average([85, 60, 80, 90, 85])
-7 / 9
7 / 2


2 13 / 18

import math
print 2 * math.sqrt(17)
print math.sqrt(27)
print math.sqrt(56)
print math.pi
print 5**2
print 6**2


import math
print 2 * math.pi
print math.pi**2

import math
print math.sqrt(7)
print math.sqrt(27)**2 / 3
print 3 * math.pi
print 3**3

import math
print math.pow(27, 1.0/3.0)
print math.sqrt(40)
print 13.00/2.00
print 25/4

import math
print math.sqrt(13)
print 15.0/4.0
print math.pow(64,1.0/3.0)
print math.sqrt(0.45)
print 22.9/100

import math
print math.sqrt(34)
print 23.0/4.0

print 0.48+1.4- 9.0/10.0

print math.pow(10.0,-5.0)


15/4
4/3
60/12

import math
print math.prime(5)
