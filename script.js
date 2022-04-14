var rate = document.getElementById("rate");

var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");

var def = "#d3d3d3";

function one() {
     first.style.opacity = "100%";
     second.style.opacity = "50%";
     third.style.opacity = "50%";
     fourth.style.opacity = "50%";
     fifth.style.opacity = "50%";

     first.style.color = "red";
     second.style.color=def;
     third.style.color=def;
     fourth.style.color=def;
     fifth.style.color=def;
     
     rate.value = 1;
}
function two() {
     first.style.opacity = "100%";
     second.style.opacity = "100%";
     third.style.opacity = "50%";
     fourth.style.opacity = "50%";
     fifth.style.opacity = "50%";

     first.style.color="#FA6636";
     second.style.color="#FA6636";
     third.style.color=def;
     fourth.style.color=def;
     fifth.style.color=def;
     
     rate.value = 2;
}
function three() {
     first.style.opacity = "100%";
     second.style.opacity = "100%";
     third.style.opacity = "100%";
     fourth.style.opacity = "50%";
     fifth.style.opacity = "50%";
     
     first.style.color="#FFAF3A";
     second.style.color="#FFAF3A";
     third.style.color="#FFAF3A"
     fourth.style.color=def;
     fifth.style.color=def;
     
     rate.value = 3;
     
}
function four() {
     first.style.opacity = "100%";
     second.style.opacity = "100%";
     third.style.opacity = "100%";
     fourth.style.opacity = "100%";
     fifth.style.opacity = "50%";
     
     first.style.color="#87D44A";
     second.style.color="#87D44A";
     third.style.color="#87D44A"
     fourth.style.color="#87D44A";
     fifth.style.color=def;
     
     rate.value = 4;
}
function five() {
     first.style.opacity = "100%"; 
     second.style.opacity = "100%";
     third.style.opacity = "100%";
     fourth.style.opacity = "100%";
     fifth.style.opacity = "100%";
     
     first.style.color="#26B43A";
     second.style.color="#26B43A";
     third.style.color="#26B43A"
     fourth.style.color="#26B43A";
     fifth.style.color="#26B43A";
     
     rate.value = 5;
}