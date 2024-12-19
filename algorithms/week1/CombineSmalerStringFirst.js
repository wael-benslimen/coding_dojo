/*steps
1. the client will provide us with the 2 sentences he wants to combine
2. we will test the length of the 2 sentenses 
3. if the first sentence is longer than the second will add the second sentence to the first else if the second sentence is longer we will add first sentence to the second else if the two sentences are the same length add the second sentence to the first sentence
4. returnt the resault
*/

/*T-Diagram
ch1 = provided as a string from the client
ch2 = provided as a string from the client
*/

//the function
function CombineSmallerStringFirst(ch1, ch2) {
    if (ch1.length < ch2.length) {
        return ch1 + ch2
    } else {
        if (ch1.length > ch2.length) {
            return ch2 + ch1
        } else {
            return ch1 + ch2
        }
    }
}
var test = CombineSmallerStringFirst("gramming", "pro")
console.log("the resault is ", test);
var test1 = CombineSmallerStringFirst("pro", "gramming")
console.log("the resault is ",test1);
var test2 = CombineSmallerStringFirst("abc", "def")
console.log("the resault is ",test2);


