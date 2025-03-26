/*steps
1. the client will provide us with the 3 needed sentences to merge 
2. will combine the provided sentences together 
3. return the resault 
 */
/*T_diagram

ch1 = a srting provided by the client  
ch2 = a string provided by the client 
ch3 = a string provided by the client
ch =  the resault of the combination of the provided strings

 */

// the function
function CombineString (ch1, ch2, ch3) {
    var ch = ch1 + ch2 + ch3
    return ch
}

ch = CombineString("a", "b", "c")
console.log("the rseault is ", ch);
