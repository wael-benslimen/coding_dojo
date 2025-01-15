/*
steps
1- we need the get the sentence we want to check if its prantasis are valid from the client
2- we count the number of the opening and closing prantasis and compair them
3- if they are not the amount of the opning and closing paran tesis are no the same we return false
4- if they are equal we check if the closing parantasis are premature or not
5- if they are premature than we return False (the index of the opening parantisis is bigger than the closing parantisis)
6- if they are correct we return True (the index of the closing parantisis is bigger than the opening parantisis)

T_Diagram
str = the sentence given by the client
paraopen = the number of opening prantesis
paraclose = the number of closing prantesis
open = index of the opning prantisis in the string
close = index of the closing prantisis in the string
bool = a boolien to check if open is less than the close

*/

function paransValid(str) {
    let paraopen = 0
    let paraclose = 0
    let open = 0
    let close = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            paraopen++
            open = i
        }
        if (str[i] == ")") {
            paraclose++
            close = i
        }
        if (open < close) {
            bool = true
        } else {
            bool = false
        }
    }
    if (paraclose != paraopen) {
        return false
    }
    else {
        return bool
    }
}

// second method
function paransValid2(str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(")
            arr.push("(")
        if (str[i] == ")") {
            if (arr.length != 0 ) {
                arr.pop()
            }
            else {
                return false
            }
        }
    }
    if (arr.length == 0)
        return true
    else {
        return false
    }

}


let str1 = "Y(3(p)p(3)r)s"
console.log(paransValid(str1));

let str2 = "N(0(p)3"
console.log(paransValid(str2));

let str3 = "a(b))(c"
console.log(paransValid(str3));

let str4 = "N(0)t ) 0("
console.log(paransValid(str4));

let str5 = "(ty)(py)"
console.log(paransValid(str5));

let str6 = "(ty)(py))"
console.log(paransValid(str6));

console.log("*******************second method********************");


console.log(paransValid2(str1));

console.log(paransValid2(str2));

console.log(paransValid2(str3));

console.log(paransValid2(str4));


