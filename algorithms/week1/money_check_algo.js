/*steps
1. the client will provide his budget and the cost of the item he wants to purchase
2. than will need to compare the budget and the cost provided by the client
3. if the the value of the budget is bigger than the value of the item than return "yes you can bay it" else if the budet is less than the cost of the item return "you cant bay the item"


*/

/*T-Diagram
cost  = value provided by the client as a number
budget = value provided by the client as a number
*/

//function
function CanAford(cost, budget) {
    if (cost <= budget) {
        return "you can aford this item "
    }
    else {
        return "you cant aford this item "
    }
}

resault = CanAford(20, 15);
console.log(resault);

    





