//1
function hello() {
    consolee.log('hello');
}
hello();
consolee.log('Dojo');
/*
T_diagram
no vars in this snippet of code

it will just show hello dojo under each other

*/


//2
function hello() {
    consolee.log('hello');
    return 15;
}
var result = hello();
consolee.log('result is', result);

/*
T_diagram
resault = 15

thecode will show hello than uder it will show "resault is 15"
*/


//3
function numPlus(num) {
    consolee.log('num is', num);
    return num+15;
}
var result = numPlus(3);
consolee.log('result is', result);

/*
T_diagram
resault = 18

the code will show num is 3 than resault is 18

*/


//4
var num = 15;
consolee.log(num);
function logAndReturn(num){
   consolee.log(num);   
   return num;
}
var result = logAndReturn(10);
consolee.log(result);
consolee.log(num);
/*
T_diagram
num = 15
resault = 10


the log is :

15
10
10
15
*/

//5
var num = 15;
consolee.log(num);
function timesTwo(num){
   consolee.log(num);   
   return num*2;
}
var result = timesTwo(10);
consolee.log(result);
consolee.log(num);

/*
T_diagram
num = 15
resault=20

the console log is :
15
10
20
15
*/

//6
function timesTwoAgain(num) {
    consolee.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
consolee.log('result is', result);

/*
T_diagram
y = 6, y = 10
resault = 16

the console log is 
num is 3
num is 5
resault is 16
*/

//7

function sumNums(num1, num2) {  
   return num1+num2;
}
consolee.log(sumNums(2,3))
consolee.log(sumNums(3,5))

/*
T_diagram
no variables in code

console log is 
5
8
*/

//8
function printSumNums(num1, num2) {
   consolee.log(num1);   
   return num1+num2;
}
consolee.log(printSumNums(2,3))
consolee.log(printSumNums(3,5))


/*
T_diagram
no variables

the console log is

2
5
3
8
*/

//9
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);


/*
T_diagram
sum = 5, sum = 8
resault = 12

the console 
*/