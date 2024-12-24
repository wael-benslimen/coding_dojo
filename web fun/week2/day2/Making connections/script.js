console.log("page loaded...");
function nameChange(){
    newname = document.createElement("INPUT")
    newname.setAttribute("type", "text");
    newname.setAttribute("value", "write your name");
    newname.setAttribute("class", "new-name")
    newname.setAttribute("onchange", "backgroundChange(this)")
    document.querySelector("#test").appendChild
    (newname);
}

function backgroundChange(element){
    var x = element.value
    console.log(x);
    document.querySelector(".x").innerHTML = x
    element.remove()
    console.log(element);
}
function add1(id, id2){
    document.querySelector(id).innerHTML = Math.floor(document.querySelector(id).innerHTML) + 1
}
function sub1(id, id2){
    document.querySelector(id).innerHTML = Math.floor(document.querySelector(id).innerHTML) - 1 
}
function del(id){
    document.querySelector(id).remove() 
}