function openNav() {
    document.getElementById("sideNav").style.width = "275px";
}
function closeNav() {
    document.getElementById("sideNav").style.width = "0px";
}

function redirectSearch() {
    location.href = "search_colleges.html";
}

var slider1 = document.getElementById("admissionRate");
var output1 = document.getElementById("admissionResult");
output1.innerHTML = slider1.value;

slider1.oninput = function () {
    output1.innerHTML = this.value * 100 + "%";
}

var slider2 = document.getElementById("rank");
var output2 = document.getElementById("rankResult");
output2.innerHTML = slider2.value;

slider2.oninput = function () {
    output2.innerHTML = this.value;
}

var slider3 = document.getElementById("size");
var output3 = document.getElementById("sizeResult");
output3.innerHTML = slider3.value;

slider3.oninput = function () {
    output3.innerHTML = this.value;
}