/**
 * Created by i68066 on 9/2/15.
 */

window.onload = function () {
    myID = document.getElementById("secondMenu");
    myID.className = "top"
};
var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 44) {
        myID.className = "show"
    } else {
        myID.className = "top"
    }
};

window.addEventListener("scroll", myScrollFunc);
