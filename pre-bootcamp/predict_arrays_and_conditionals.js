function displayContactInfo() {
    var auntContactInfo = ["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
// resault : ["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345]

function displayGrocerylist() {
    var produce = ["apples", "oranges"];
    var frozen = ["broccoli", "ice cream"];
    frozen.push("hashbrowns");
    console.log(frozen);
}

//resault: ["broccoli", "ice cream","hashbrowns"]

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

//resault =  ["Bambi", "Beetlejuice", "Toy Story"]