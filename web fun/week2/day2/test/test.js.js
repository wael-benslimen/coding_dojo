function nameChange(){
    newname = document.createElement("INPUT")
    newname.setAttribute("type", "text");
    newname.setAttribute("value", "write your name");
    newname.setAttribute("class", "new-name")
    newname.setAttribute("onchange", "backgroundChange()")
    document.querySelector("#test").appendChild
    (newname);
}
