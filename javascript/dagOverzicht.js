let toDoList = ["yeetut","deletus","opdracht1","opdracht2","yeet"];
let month = ["januarie","februarie","maart","april","mei","juni","juli","augustus","oktober","november","december"];
let week = ["ma","di","wo","do","fri","za","zo"];
let i = 0;

let midle = document.getElementById("midle");

let dateTime = document.getElementById("dateTime");
var dt = new Date();

dateTime.innerText=week[dt.getDay()]+" "+dt.getDate()+" "+month[dt.getMonth()];
console.log(dateTime);


toDoList.forEach(list);


function list() {
    lijst = document.createElement("LI");
    div = document.createElement("div");
    div.className="list "+"done=false "+"entry="+i;
    div.id="entry="+i;
    img = document.createElement("div");
    img.className="plaatje "+i;
    text =document.createElement("div");
    text.className="text";
    time = document.createElement("div");
    time.className ="time";
    vinkje = document.createElement("div");
vinkje.className="vinkje done";

    lijst.appendChild(div);
    vallue = document.createTextNode(toDoList[i]);
    text.appendChild(vallue);
    div.appendChild(img);
    div.appendChild(text);
    div.appendChild(time);
    div.appendChild(vinkje);
    timeText = document.createTextNode(dt.getHours()+i+":"+dt.getMinutes());
    time.appendChild(timeText);
    document.getElementById("dag").appendChild(lijst);
    i = i+1;

};

let button = document.getElementById("entry="+0);

button.addEventListener("click", function(){
    console.log('entry='+i);
    midle.innerHTML = "<img src='./img/tasks/"+toDoList[0]+".svg' alt='picture "+toDoList[0]+"'>"+
    "<div></div>";

    document.getElementById("header").appendChild(time);
});



let roundButton = document.getElementById("boog");
roundButton.addEventListener("click",back);

function back() {
    window.location.href= "dagOverzicht.html";
};
