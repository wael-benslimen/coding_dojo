// feature 1
function reward(time, homework) {
    if (homework == true) {
        if (time < 10) {
            console.log("theres your latte");
            
        } else {
             if (10 < time, time < 16) {
            console.log("there s your hot chocolate");
            
             } else {
                 if (16<time, time<22) {
            console.log("there is your icecream");
            
                 } else {
                     if (time > 22) {
            console.log("go to sleep now");
            
                     }
                 }
                 
            }

        
        }

       
    }

}





// feature 2
function reward2(time, homework) {
    if (homework == true) {
        if (time < 10) {
            console.log("theres your latte");
            
        } else {
            if (10 > time, time > 15) {
                console.log("there s your hot chocolate");
            } else {
                if (15 <= time, time < 18) {
                    if (time % 2 == 0) {
                        console.log("there is your icecream");
                        
                    } else {
                        console.log("there is you hot chocolate");
                    }
                } else {
                    if (time < 22) {
                        console.log("there is your icecream");
                    } else {
                        console.log("go to sleep");
                        
                    }
                }
            }
        }
    }
}


// feature 3
function reward3(time, homework) {
    if (homework == true) {
        if (time < 10) {
            console.log("theres your latte");   
        } else {
            if (15 <= time, time <= 10) {
                console.log("there s your hot chocolate");
            } else {
                if (18 <= time <= 15) {
                    if (time % 2 == 0) {
                        var snack = ["ice cream", "candy", "cookie"]
                        i = Math.floor(Math.random() * (3))
                        console.log("here is your " + snack[i]);
                           
                    } else {
                        var snackodd = ["hot chocolate", "tea", "cake"]
                        j = Math.floor(Math.random() * (3))
                        console.log("here is your " + snackodd[j]);
                    }
                } else {
                    if (time <= 22) {
                        console.log("there is your icecream");
                    } else {
                        console.log("go to sleep");
                        
                    }
                }
            }
        }
    }
}


var homework = true
const now = new Date()
const h = now.getHours()
console.log(h)

reward(h, homework)
reward2(h, homework)
reward3(h, homework)
