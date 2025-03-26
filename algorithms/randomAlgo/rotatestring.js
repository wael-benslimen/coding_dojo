/*
steps/
1/ we creat machine that takes a data from the client that is sentence and a number
2/ we cheack if the number given is 0 or in the same value as the length of sentence given  return the same sentence
3/ we cheack if the number given is highter then the length of the sentence 
4/ we substract length of the sentence from the number given
5/ we creat an empty container 
6/ we loop throgh the sentence  starting from the end and stops at the number given
7/ we add the carecters from the end of the sentence to the previosly created container and remove them 1 by one
8/ we return the container plus the rest of the sentence


Tdiagrame
   var        |     value
              | 

   str        |    "the string given by the client"
   amnt       |      intetger given by the client 
   str2       |      "string resault of the loop "


*/



function retateStr(str, amnt) {
    let str2 = ""
    if (amnt == 0 || amnt == str.length) {
        console.log("if 1");
        return str
    }
    if (amnt > str.length) {
        amnt = amnt - str.length

    }
    for (let i = str.length - 1; i > str.length-amnt-1 ; i--){
        str2 = str[i] + str2 
        console.log(str2);
    }
    console.log(str2);
    console.log(str2 + str.replace(str2, ""));
    
    
}



console.log(retateStr("Hello world", 11));