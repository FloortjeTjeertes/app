var last = "login.html";
let terug = document.getElementById('back');
terug.addEventListener("click",function(){
    window.location.href= last;


});
let knop1 = document.getElementById("userOne");

knop1.addEventListener("click",function () {
    window.location.href= "dagOverzicht.html";

});