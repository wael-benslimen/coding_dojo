const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
//Predict the output
console.log(randomCar)
//Tesla
console.log(otherRandomCar)
// Mercedes

// prob2

const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);//elon
console.log(employeeName);
// error there is no employeeName to print it it should look like this employee.employeeName

// prob3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log(password); //12345
console.log(hashedPassword);//udefined

// prob4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first === second);// false
console.log(first === third);// True

// prob5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key); //value
console.log(secondKey); //[1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); //1
console.log(willThisWork); //5

// prob6

var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (var index = 0; index < names.length; index++) {
            var name = names[index];
            console.log(name + ' was found at index ' + index);
        }
        console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);

/*
Paul was found at index  0
George was found at index  1
John was found at index  2
Ringo was found at index  3
name and index after loop is Ringo:4
*/

// prob7
function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
        let name = names[index];
        console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
}
// we didnt invoke the function so it wont log anything

// prob8
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (let index = 0; index < names.length; index++) {
            const name = names[index];
            console.log(name + ' was found at index ' + index);
        }
    }
    actuallyPrintingNames();
}
printNames(beatles);
/*
Paul was found at index 0
George was found at index 1
John was found at index 2
Ringo was found at index 3
 */

// prob9
const planet = {
    name: "Jupiter",
    milesFromSun: 49849,
    mass: 393983,
    composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = { ...planet }
console.log(planet.composition[0] === planetCopy.composition[0])// True
console.log(planet === planetCopy)//False





