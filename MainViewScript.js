function progressBarLoad(){
    var pbar=document.getElementById('progBar');
    pbar.style.display="none";
}


size=0
function stableText(){
    if(size==0){
        document.getElementsByClassName('searchText')[0].style.width="60%";
        //size=1;
   }

//    else if(size==1){
//         document.getElementsByClassName('searchText')[0].style.width="10%";
//         size=0;
//    }
}

function homeClick(){
    var a=document.getElementsByClassName('home');
    a[0].style.background="#1abc9c";
    a[0].style.border="2px solid white";

    var a=document.getElementsByClassName('home1');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home2');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home3');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home4');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home5');
    a[0].style.background="#05223d";
    a[0].style.border="none";
}

function homeClick1(){
    var a=document.getElementsByClassName('home');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home1');
    a[0].style.background="#1abc9c";
    a[0].style.border="2px solid white";

    var a=document.getElementsByClassName('home2');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home3');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home4');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home5');
    a[0].style.background="#05223d";
    a[0].style.border="none";
}

function homeClick2(){
    var a=document.getElementsByClassName('home');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home1');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home2');
    a[0].style.background="#1abc9c";
    a[0].style.border="2px solid white";

    var a=document.getElementsByClassName('home3');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home4');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home5');
    a[0].style.background="#05223d";
    a[0].style.border="none";
}

function homeClick3(){
    var a=document.getElementsByClassName('home');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home1');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home2');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home3');
    a[0].style.background="#1abc9c";
    a[0].style.border="2px solid white";

    var a=document.getElementsByClassName('home4');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home5');
    a[0].style.background="#05223d";
    a[0].style.border="none";
}

function homeClick4(){
    var a=document.getElementsByClassName('home');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home1');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home2');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home3');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home4');
    a[0].style.background="#1abc9c";
    a[0].style.border="2px solid white";

    var a=document.getElementsByClassName('home5');
    a[0].style.background="#05223d";
    a[0].style.border="none";
}

function homeClick5(){
    var a=document.getElementsByClassName('home');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home1');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home2');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home3');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home4');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    var a=document.getElementsByClassName('home5');
    a[0].style.background="#1abc9c";
    a[0].style.border="2px solid white";
}

function burgerClick(){
    var ham=document.getElementById('ham1').classList.toggle('change');
    var nav=document.getElementsByClassName('burgerList');

    if(nav[0].style.display=='block')
    {
        nav[0].style.display='none';
    }
    else{
        nav[0].style.display='block';
    }
}

function customTextClicked(){
    var text=document.getElementsByClassName('customText1');
    text[0].style.border= "2px solid #1abc9c";
}

function customSearchClicked(){
    var s=document.getElementsByClassName('customSearch1');
    if(s[0].style.display=='block')
    {
        s[0].style.display='none';
    }
    else{
        s[0].style.display='block';
    }
}

function signInClicked(){
    var a=document.getElementsByClassName('signin');
    a[0].style.background="#1abc9c";
    a[0].style.border="2px solid white";

    var a=document.getElementsByClassName('logOut');
    a[0].style.background="#05223d";
    a[0].style.border="none";
}

function logOutClicked(){
    var a=document.getElementsByClassName('logOut');
    a[0].style.background="#1abc9c";
    a[0].style.border="2px solid white";
    
    var a=document.getElementsByClassName('signin');
    a[0].style.background="#05223d";
    a[0].style.border="none";

    localStorage.clear();
    document.getElementById('profileName').innerHTML="Hi";
    document.getElementById('profileName1').innerHTML="Hi";
}

function homeClicked(){
    document.getElementById('homeIcon').style.color="#1abc9c";
    document.getElementById('homeName').style.color="#1abc9c";

    document.getElementById('tvIcon').style.color="white";
    document.getElementById('tvName').style.color="white";

    document.getElementById('movieIcon').style.color="white";
    document.getElementById('movieName').style.color="white";

    document.getElementById('showIcon').style.color="white";
    document.getElementById('showName').style.color="white";

    document.getElementById('seriesIcon').style.color="white";
    document.getElementById('seriesName').style.color="white";

    document.getElementById('songIcon').style.color="white";
    document.getElementById('songName').style.color="white";
}

function tvClicked(){
    document.getElementById('homeIcon').style.color="white";
    document.getElementById('homeName').style.color="white";

    document.getElementById('tvIcon').style.color="#1abc9c";
    document.getElementById('tvName').style.color="#1abc9c";

    document.getElementById('movieIcon').style.color="white";
    document.getElementById('movieName').style.color="white";

    document.getElementById('showIcon').style.color="white";
    document.getElementById('showName').style.color="white";

    document.getElementById('seriesIcon').style.color="white";
    document.getElementById('seriesName').style.color="white";

    document.getElementById('songIcon').style.color="white";
    document.getElementById('songName').style.color="white";
}

function movieClicked(){
    document.getElementById('homeIcon').style.color="white";
    document.getElementById('homeName').style.color="white";

    document.getElementById('tvIcon').style.color="white";
    document.getElementById('tvName').style.color="white";

    document.getElementById('movieIcon').style.color="#1abc9c";
    document.getElementById('movieName').style.color="#1abc9c";

    document.getElementById('showIcon').style.color="white";
    document.getElementById('showName').style.color="white";

    document.getElementById('seriesIcon').style.color="white";
    document.getElementById('seriesName').style.color="white";

    document.getElementById('songIcon').style.color="white";
    document.getElementById('songName').style.color="white";
}

function showClicked(){
    document.getElementById('homeIcon').style.color="white";
    document.getElementById('homeName').style.color="white";

    document.getElementById('tvIcon').style.color="white";
    document.getElementById('tvName').style.color="white";

    document.getElementById('movieIcon').style.color="white";
    document.getElementById('movieName').style.color="white";

    document.getElementById('showIcon').style.color="#1abc9c";
    document.getElementById('showName').style.color="#1abc9c";

    document.getElementById('seriesIcon').style.color="white";
    document.getElementById('seriesName').style.color="white";

    document.getElementById('songIcon').style.color="white";
    document.getElementById('songName').style.color="white";
}

function seriesClicked(){
    document.getElementById('homeIcon').style.color="white";
    document.getElementById('homeName').style.color="white";

    document.getElementById('tvIcon').style.color="white";
    document.getElementById('tvName').style.color="white";

    document.getElementById('movieIcon').style.color="white";
    document.getElementById('movieName').style.color="white";

    document.getElementById('showIcon').style.color="white";
    document.getElementById('showName').style.color="white";

    document.getElementById('seriesIcon').style.color="#1abc9c";
    document.getElementById('seriesName').style.color="#1abc9c";

    document.getElementById('songIcon').style.color="white";
    document.getElementById('songName').style.color="white";
}

function songClicked(){
    document.getElementById('homeIcon').style.color="white";
    document.getElementById('homeName').style.color="white";

    document.getElementById('tvIcon').style.color="white";
    document.getElementById('tvName').style.color="white";

    document.getElementById('movieIcon').style.color="white";
    document.getElementById('movieName').style.color="white";

    document.getElementById('showIcon').style.color="white";
    document.getElementById('showName').style.color="white";

    document.getElementById('seriesIcon').style.color="white";
    document.getElementById('seriesName').style.color="white";

    document.getElementById('songIcon').style.color="#1abc9c";
    document.getElementById('songName').style.color="#1abc9c";
}