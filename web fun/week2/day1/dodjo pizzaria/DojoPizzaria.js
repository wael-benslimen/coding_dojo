function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza
}

pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"] )
console.log(pizza1);
pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(pizza2);

function randomPizza() {
    var randomcrust = ["deep dish", "hand tosed", "thin crust", "normal"]
    var randomsheese = ["", "mozarella", "feta", "chedar"]
    var randomsauce = ["normal", "marinara", "white sauce"]
    var rnadomtopping = ["", "olives", "peperoni", "sausage", "jerky"]
    var pizza = {};
    pizza.crust = randomcrust[Math.floor(Math.random() * 4)]
    pizza.sauce = randomsauce[Math.floor(Math.random() * 3)];
    pizza.cheese = [randomsheese[Math.floor(Math.random() * 4)], randomsheese[Math.floor(Math.random() * 4)]];
    pizza.toppings = [rnadomtopping[Math.floor(Math.random() * 5)], rnadomtopping[Math.floor(Math.random() * 5)], rnadomtopping[Math.floor(Math.random() * 5)]] ;
    return pizza
}
var randpizza = randomPizza()
console.log(randpizza);
console.log();


