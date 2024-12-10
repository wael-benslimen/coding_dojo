/*How do we know we need a loop here?
because its a repative action
 What's the starting point of the loop?
 it startes after the ranner reaches the first 2 miles
 When should the loop stop?
 after the runner reachest the 6th mile
 How will the loop know when to stop?
 after it give out 3 pieaces of candy
 What's incrementing for each iteration of the loop?
 +1
 What variables do we need?
 a couter in the loop and a milage counter also */

 var distence = 0
 if (distence <= 6) {
     for (let i = 0; i < 3; i++) {
        distence = distence + 2
        console.log("here is your candy")
        // console.log(distence)
     }
}

// bonus

var distence = 0
var speed = 0
if (distence <= 6 && speed >= 5.5) {
    for (let i = 0; i < 3; i++) {
       distence = distence + 2
       console.log("here is your candy")
       // console.log(distence)
    }
}