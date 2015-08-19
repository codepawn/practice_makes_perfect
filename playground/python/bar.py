def arrayMinimum(inputArray):

    indexOfMinimum = 0
    for i in range(1, len(inputArray)):
        if inputArray[i] < inputArray[indexOfMinimum]:
            i = indexOfMinimum
    return inputArray[indexOfMinimum]

print arrayMinimum([19,32,11,23])


def isDiagonalMatrix(matrix):

    for i in range(len(matrix)):
        j = 0
        while j < len(matrix):
            if matrix[i][j] and i != j:
                return False
            j += 1
    return True

print isDiagonalMatrix([
[1, 0, 0],
[0, 5, 0],
[0, 0, 3]
])

def sumOfCubes(n):
    result = 0
    i = 0
    for i in range(1, n + 1):
    	result += i * i * i
    return result
sumOfCubes(3)

def minimalMultiple(divisor, lowerBound):

    if lowerBound % divisor == 0:
        return lowerBound
    return lowerBound / divisor * divisor
print minimalMultiple(5,12)

def bettingGame(L):

    s = 0
    for i in range(len(L)):
        s += L[i]
    if s == 0:
        return True

    return s % len(L) == 0

63
15
3

3
4/1

4000000 + 3000 + 0.067

1/3

5/2

5/6

8/3
1/4

8/12
2/3

14/6
9/6
23/6
3 5/6

7/5
3/5
