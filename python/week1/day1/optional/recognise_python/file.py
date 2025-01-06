#declaring a variable of intger type
num1 = 42 
#declaring a variable of float type
num2 = 2.3 
#declaring a variable of boolien type
boolean = True
#declaring a variable of string type
string = 'Hello World'
#creating a list of strings
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']
#creating a dict 
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}
# creating a tuple
fruit = ('blueberry', 'strawberry', 'banana')
# loging the type of the variable fruit in this case is "tuple"
print(type(fruit))
# loging the second value of the list pizza_toppings "sausage"
print(pizza_toppings[1])
# adding the value "Mushrooms" to the list pizza_topings
pizza_toppings.append('Mushrooms')
# loging the value of the name in the dict person : "jhon"
print(person['name'])
# changing the value of the name in the person dict from "jhon" to "george"
person['name'] = 'George'
# adding a value to the dict with the name 'eye_color' and the value of "blue" 
person['eye_color'] = 'blue'
# loging the 3rd element of the tuple fruit "banana"
print(fruit[2])

# initiating the condition statement
if num1 > 45:
    # if the condition is met the code will print "it s grater"
    print("It's greater")
else:
    # if the condition is not met the code will print "it s lower"
    print("It's lower")
# initiating the condition statement
if len(string) < 5:
    #  if the condition is met the code will print "it s a short word"
    print("It's a short word!")
elif len(string) > 15:
    # if the condition is met the code will print "it s a long word"
    print("It's a long word!")
else:
    # if the condition is met the code will print "just right!"
    print("Just right!")
# initiating a for loop
for x in range(5):
    # it will print all the numbers between 0 and 5
    print(x)
# initiating a for loop
for x in range(2,5):
    # it will print all the numbers between 0 and 5
    print(x)
# initiating a for loop
for x in range(2,10,3):
    # it will print all the numbers between 2 and 10 with a step of 3
    print(x)
# declaring a var
x = 0
# initiating a while statement
while(x < 5):
    # it will print the value of x untill x is highter than 5
    print(x)
    # adding +1 to the value of x
    x += 1
# removing the last elment of the list pizza_topings
pizza_toppings.pop()
# removing the 2sd element od the list pizza_topings
pizza_toppings.pop(1)
# it will print all the values of the dict person
print(person)
# it will remove the "eye_color" element from from the dict person
person.pop('eye_color')
# printing person after the modifications
print(person)
# initiating a for loop for all the values in the list pizza_topings
for topping in pizza_toppings:
    # initiating an if statement
    if topping == 'Pepperoni':
        # if the condition is true the code will continue running 
        continue
    # it will print "After 1st if statement"
    print('After 1st if statement')
    # # initiating an if statement
    if topping == 'Olives':
        # if the cndition is met the code will brake the loop and exit
        break
# declaring a function named "print_hello_ten_times"
def print_hello_ten_times():
    # initiating a for loop
    for num in range(10):
        # printing hello
        print('Hello')
# invoking the function
print_hello_ten_times()
# declaring a function named "print_hello_x_times"
def print_hello_x_times(x):
    # initiating a for loop
    for num in range(x):
        # printing "hello"
        print('Hello')
# invoking the function
print_hello_x_times(4)
# declaring a function named "print_hello_x_or_ten_times" with a default parameter
def print_hello_x_or_ten_times(x = 10):
    # initiating a for loop
    for num in range(x):
        # printing "hello"
        print('Hello')
# invoking the function with the default params
print_hello_x_or_ten_times()
# invoking the function with a paramater of 4
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)