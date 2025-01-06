# 1
x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0] = 15

print(x)

students[0]["last_name"] = "brayent"
print(students[0])

sports_directory['soccer'][0] = 'andres'
print(sports_directory['soccer'])

z[0]['y'] = 30
print(z[0])
print("*"*10)

# 2
students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterateDictionary(students):
    for i in students:
        keylist = list(i.keys())
        valueslist = list(i.values())
        str = keylist[0] + " - " + valueslist[0]
        str = str +", "+keylist[1] + " - " + valueslist[1]
        print(str)
        
iterateDictionary(students)
print("*"*10)

def iterateDictionary2(key_name, some_list):
    for i in some_list:
        print(i[key_name])

iterateDictionary2('first_name', students) 
print("*"*10)

dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(dict):
    for i in dict:
        print(str(len(dict[i])) +" "+ i)
        for j in dict[i]:
            print(j)



printInfo(dojo)

