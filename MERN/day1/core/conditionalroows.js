// prob1
const olderThan18 = (age) => {
    return age >= 18 ? "they are an adult" : "still a chiled"
}

console.log(olderThan18(19));
console.log(olderThan18(17));


// prob2
const raining = (weather) => {
    return weather == "rain" ? "get your jacket" : "no rain today"
}
console.log(raining("rain"));
console.log(raining('sun'));


// prob3
const isEven = (num) => {
    return num % 2 == 0 ? "even" : "odd"
}
console.log(isEven(4));
console.log(isEven(5));

// prob4
const graterthan = (num1, num2) => {
    return num1 < num2 ?  ' ${num2} is bigger than ${num1}' : '${num1} is bigger than ${num2}'
}

console.log(graterthan(2, 15));
console.log(graterthan(50, 15));






