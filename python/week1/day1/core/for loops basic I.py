for i in range (151):
    print(i)

for i in range (5, 1001, 5):
    print(i)

for i in range (1, 100):
    if (i % 10 == 0):
        print("coding dojo")
    elif(i % 5 == 0):
        print("coding")
    else:
        print(i)
x = 0
for i in range (500000):
    if i % 2 != 0:
        x += i
print(x)

for i in range(2018, 0, -4):
    print(i)

lownum = 0
hightnum = 50
mult = 5
for i in range (lownum, hightnum):
    if(i % mult == 0):
        print(i)

