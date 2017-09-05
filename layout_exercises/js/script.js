var equalColumns = function () {
    console.log("hej");
    var columns = document.getElementsByClassName("col");
    var length = columns.length;
    console.log("length =" + length);
    var height = 0;
    for(var i = 0; i < length; i++) {
        columns[i].style.height = "auto";
    }
    for(var i = 0; i < length; i++) {
        if(columns[i].clientHeight > height) {
            height = columns[i].clientHeight;
            console.log("height = " + height);
        }
    }
    for(var i = 0; i < length; i++) {
        columns[i].style.height = height + "px";
        console.log(" columns[i].style.height = " + columns[i].style.height);
    }
}
equalColumns();
window.addEventListener("resize",equalColumns, true);