
  


function bigSize(){
    var a=document.getElementById('demoDiv');

    var b=document.getElementById('mainButton');

    b.style.display="none";

    a.style.display="block";
}

var fname,mail,mob,res;
function dialog(){
    var c=document.getElementById('dialogBoxDemo');

    c.style.display="block";

}

function smile(){
    var d=document.getElementById('thankingDemo');
    var e=document.getElementById('dialogBoxDemo');

    e.style.display="none";
    d.style.display="block";
}

function closeDialoge(){
    var f=document.getElementById('thankingDemo');

    f.style.display="none";

    window.open("index.html","_self");
}

var k=0;

function star1(){
    var g=document.getElementById('starSize1');

    if(k==0){
        g.style.color="yellow";
        k=1;
    }
    else{
        g.style.color="black";
        k=0;
    }
}

var l=0
function star2(){
    var g=document.getElementById('starSize2');
    var g1=document.getElementById('starSize1');

    if(l==0){
        g.style.color="yellow";
        g1.style.color="yellow";
        l=1;
    }
    else{
        g.style.color="black";
        g1.style.color="black";
        l=0;
    }
}

var i=0;
function star3(){
    var g2=document.getElementById('starSize2');
    var g1=document.getElementById('starSize1');
    var g=document.getElementById('starSize3');

    if(i==0){
        g1.style.color="yellow";
        g2.style.color="yellow";
        g.style.color="yellow";
        i=1;
    }
    else{
        g1.style.color="black";
        g2.style.color="black";
        g.style.color="black";
        i=0;
    }
}

var j=0;
function star4(){
    var g2=document.getElementById('starSize2');
    var g1=document.getElementById('starSize1');
    var g3=document.getElementById('starSize3');
    var g=document.getElementById('starSize4');

    if(j==0){
        g1.style.color="yellow";
        g2.style.color="yellow";
        g3.style.color="yellow";
        g.style.color="yellow";
        j=1;
    }
    else{
        g1.style.color="black";
        g2.style.color="black";
        g3.style.color="black";
        g.style.color="black";
        j=0;
    }
}

var m=0;
function star5(){
    var g2=document.getElementById('starSize2');
    var g1=document.getElementById('starSize1');
    var g3=document.getElementById('starSize3');
    var g4=document.getElementById('starSize4');
    var g=document.getElementById('starSize5');

    if(m==0){
        g1.style.color="yellow";
        g2.style.color="yellow";
        g3.style.color="yellow";
        g4.style.color="yellow";
        g.style.color="yellow";
        m=1;
    }
    else{
        g1.style.color="black";
        g2.style.color="black";
        g3.style.color="black";
        g4.style.color="black";
        g.style.color="black";
        m=0;
    }
}