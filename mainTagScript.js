function signInOnbsClicked() {
    var sig = document.getElementById('signInBS');
    sig.style.border = "1px solid white";
    sig.style.background = "#1abc9c"

    var sig1 = document.getElementById('logOutBS');
    sig1.style.border = "none";
    sig1.style.background = "#05223d"
}

function logOutOnbsClicked() {
    var sig1 = document.getElementById('logOutBS');
    sig1.style.border = "1px solid white";
    sig1.style.background = "#1abc9c"

    var sig = document.getElementById('signInBS');
    sig.style.border = "none";
    sig.style.background = "#05223d"

    localStorage.clear();
    document.getElementById('profileName').innerText="Hi";
    document.getElementById('profileName1').innerText="Hi";
}

var flag=0;
var slides=document.getElementsByClassName('slide');

 display();

 function display(){

     slides[flag].style.display="block";
     flag++;

     if(flag>3)
     {
         flag=0;
     }
 }

 setInterval(display1, 4000)

 function display1(){
    for(let y of slides){
        y.style.display="none"
    }
    display();
 }