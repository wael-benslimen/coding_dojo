/*
steps/
1/ we creat machine that takes a data from the client that is sentence and a number
2/ we cheack if the number given is 0 or in the same value as the lenght of sentence given  return the same sentence
3/ we cheack if the number given is highter then the lenght of the sentence 
4/ we substract lenght of the sentence from the number given
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
    str2 = ""
    if (amnt == 0 || amnt == str.lenght - 1) {
        console.log("if 1");
        return str
    }
    if (amnt > str.lenght) {
        amnt = amnt - str.lenght
        console.log("if 2", amnt);

    }

    for (let i = str.length - 1; i > amnt; i--) {
        str2 = str2 + str[i]
        console.log(str2);
        str
    }
}



console.log(retateStr("Hello world", 2));