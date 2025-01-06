# 1
def countdouwn(num):
    arr = []
    for i in range(num, 0, -1):
        arr.append(i)
    return arr

print(countdouwn(5))
# 2
def printandreturn(arr):
    print(arr[0])
    return arr[1]

print(printandreturn([1,2]))
# 3
def first_plus_length(arr):
    return arr[0] + len(arr)

print(first_plus_length([1,5,6,7,2,9,8]))
# 4
def values_grater_than_second(arr):
    arr1 = []
    for i in arr:
        if i > arr[1]:
            arr1.append(i)
    return arr1
print(values_grater_than_second([1,5,6,7,2,9,8]))
# 5
def this_length_that_value(size, value):
    arr = []
    for i in range (size):
        arr.append(value)
    return arr

print(this_length_that_value(5, 6))

