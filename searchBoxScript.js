// Search list for laptop

function searchInputList(){
    var search=document.getElementById('searchTextId').value.toUpperCase();
    var listItem=document.getElementsByClassName('sList');

    for(var i=0;i<listItem.length;i++){
        var z=document.getElementsByClassName('uListAnchor')[i].innerHTML;
        var y=z.toUpperCase();
        
        if(y.indexOf(search)>-1){
            listItem[i].style.display="block"
        }else{
            listItem[i].style.display="none" 
        }
    }

    if(search==""){

        var j=listItem.length;
        for(var h=0;h<j;h++){
            listItem[h].style.display="none";
        }
    }
}


function searchIconClicked(){

    z=0;
    var search=document.getElementById('searchTextId').value;

    if(search.localeCompare("Pawankhind")==0)
    {
        window.open("movieNo1.html","_self");
        z++;
    }

    if(search.localeCompare("KGF_Chapter2")==0)
    {
        window.open("movieNo2.html","_self");
        z++;
    }

    if(search.localeCompare("Heropanti2")==0)
    {
        window.open("movieNo3.html","_self");
        z++;
    }

    if(search.localeCompare("RRR")==0)
    {
        window.open("movieNo4.html","_self");
        z++;
    }

    if(search.localeCompare("Bachchhan_Pande")==0)
    {
        window.open("movieNo5.html","_self");
        z++;
    }

    if(search.localeCompare("IronMan")==0)
    {
        window.open("movieNo6.html","_self");
        z++;
    }

    if(search.localeCompare("IronMan2")==0)
    {
        window.open("movieNo7.html","_self");
        z++;
    }

    if(search.localeCompare("Avengers_Endgame")==0)
    {
        window.open("movieNo8.html","_self");
        z++;
    }

    if(search.localeCompare("Bheeshma")==0)
    {
        window.open("movieNo9.html","_self");
        z++;
    }

    if(search.localeCompare("Doctor_Strange")==0)
    {
        window.open("movieNo10.html","_self");
        z++;
    }

    if(search.localeCompare("Eternals")==0)
    {
        window.open("movieNo11.html","_self");
        z++;
    }

    if(search.localeCompare("Beast")==0)
    {
        window.open("movieNo12.html","_self");
        z++;
    }

    if(search.localeCompare("Spider_Man_No_Way_To_Home")==0)
    {
        window.open("movieNo13.html","_self");
        z++;
    }

    if(search.localeCompare("Ghazi_Attack")==0)
    {
        window.open("movieNo14.html","_self");
        z++;
    }

    if(search.localeCompare("Valamai")==0)
    {
        window.open("movieNo15.html","_self");
        z++;
    }

    if(search.localeCompare("Marshal")==0)
    {
        window.open("movieNo16.html","_self");
        z++;
    }

    if(search.localeCompare("IronMan3")==0)
    {
        window.open("movieNo17.html","_self");
        z++;
    }

    if(search.localeCompare("Pushpa")==0)
    {
        window.open("movieNo18.html","_self");
        z++;
    }

    if(search.localeCompare("FilmFare_Award2021")==0)
    {
        window.open("tvshowsNo1.html","_self");
        z++;
    }

    if(search.localeCompare("Kapil_Sharma_Episode67")==0)
    {
        window.open("tvshowsNo2.html","_self");
        z++;
    }

    if(search.localeCompare("Kapil_Sharma_Episode68")==0)
    {
        window.open("tvshowsNo3.html","_self");
        z++;
    }

    if(search.localeCompare("Kapil_Sharma_Episode69")==0)
    {
        window.open("tvshowsNo4.html","_self");
        z++;
    }

    if(search.localeCompare("FilmFare_Award2022")==0)
    {
        window.open("tvshowsNo5.html","_self");
        z++;
    }

    if(search.localeCompare("Mirchi_Music_Award2022")==0)
    {
        window.open("tvshowsNo6.html","_self");
        z++;
    }

    if(search.localeCompare("Crushed")==0)
    {
        window.open("webSeriesNo1.html","_self");
        z++;
    }

    if(search.localeCompare("Halo_NightFall")==0)
    {
        window.open("webSeriesNo2.html","_self");
        z++;
    }

    if(search.localeCompare("Mirzapur")==0)
    {
        window.open("webSeriesNo4.html","_self");
        z++;
    }

    if(search.localeCompare("Money_Heist_Season5")==0)
    {
        window.open("webSeriesNo5.html","_self");
        z++;
    }

    if(search.localeCompare("Money_Heist_Season1")==0)
    {
        window.open("webSeriesNo6.html","_self");
        z++;
    }

    if(search.localeCompare("Money_Heist_Season3")==0)
    {
        window.open("webSeriesNo7.html","_self");
        z++;
    }

    if(search.localeCompare("Money_Heist_Season4")==0)
    {
        window.open("webSeriesNo8.html","_self");
        z++;
    }

    if(search.localeCompare("Rudra_The_Edge_Of_Darkness")==0)
    {
        window.open("webSeriesNo9.html","_self");
        z++;
    }

    if(search.localeCompare("Scam1992")==0)
    {
        window.open("webSeriesNo10.html","_self");
        z++;
    }

    if(search.localeCompare("Squid_Game")==0)
    {
        window.open("webSeriesNo11.html","_self");
        z++;
    }

    if(search.localeCompare("Family_Man_Season1")==0)
    {
        window.open("webSeriesNo12.html","_self");
        z++;
    }

    if(search.localeCompare("Family_Man_Season2")==0)
    {
        window.open("webSeriesNo13.html","_self");
        z++;
    }

    if(search.localeCompare("Flash_Season1")==0)
    {
        window.open("webSeriesNo14.html","_self");
        z++;
    }

    if(search.localeCompare("Kota_Factory")==0)
    {
        window.open("webSeriesNo15.html","_self");
        z++;
    }

    if(search.localeCompare("Money_Heist_Season2")==0)
    {
        window.open("webSeriesNo16.html","_self");
        z++;
    }

    if(search.localeCompare("MoonKnite")==0)
    {
        window.open("webSeriesNo17.html","_self");
        z++;
    }

    if(search.localeCompare("Game_Of_Thrones_Episode1")==0)
    {
        window.open("webSeriesNo18.html","_self");
        z++;
    }

    if(search.localeCompare("Game_Of_Thrones_Episode2")==0)
    {
        window.open("webSeriesNo19.html","_self");
        z++;
    }

    if(search.localeCompare("Game_Of_Thrones_Episode3")==0)
    {
        window.open("webSeriesNo20.html","_self");
        z++;
    }

    if(search.localeCompare("Game_Of_Thrones_Episode4")==0)
    {
        window.open("webSeriesNo21.html","_self");
        z++;
    }

    if(search.localeCompare("Game_Of_Thrones_Episode5")==0)
    {
        window.open("webSeriesNo22.html","_self");
        z++;
    }

    if(search.localeCompare("Game_Of_Thrones_Episode6")==0)
    {
        window.open("webSeriesNo23.html","_self");
        z++;
    }

    if(search.localeCompare("NDTV_India")==0)
    {
        window.open("tvNo1.html","_self");
        z++;
    }

    if(search.localeCompare("V6_News")==0)
    {
        window.open("tvNo2.html","_self");
        z++;
    }

    if(search.localeCompare("CNN_News")==0)
    {
        window.open("tvNo3.html","_self");
        z++;
    }

    if(search.localeCompare("Aljazeera")==0)
    {
        window.open("tvNo4.html","_self");
        z++;
    }

    if(search.localeCompare("Zee_News")==0)
    {
        window.open("tvNo5.html","_self");
        z++;
    }

    if(search.localeCompare("DW_English")==0)
    {
        window.open("tvNo6.html","_self");
        z++;
    }

    if(search.localeCompare("R.Bharat")==0)
    {
        window.open("tvNo7.html","_self");
        z++;
    }

    if(search.localeCompare("Nasa")==0)
    {
        window.open("tvNo8.html","_self");
        z++;
    }

    if(search.localeCompare("DD_News")==0)
    {
        window.open("tvNo9.html","_self");
        z++;
    }

    if(search.localeCompare("Sky_News")==0)
    {
        window.open("tvNo10.html","_self");
        z++;
    }

    if(search.localeCompare("Mastii")==0)
    {
        window.open("tvNo11.html","_self");
        z++;
    }

    if(search.localeCompare("Tv9_Marathi")==0)
    {
        window.open("tvNo12.html","_self");
        z++;
    }

    if(search.localeCompare("News_24_Think_First")==0)
    {
        window.open("tvNo13.html","_self");
        z++;
    }

    if(search.localeCompare("ABP_Ganga")==0)
    {
        window.open("tvNo14.html","_self");
        z++;
    }

    if(search.localeCompare("News_Nation")==0)
    {
        window.open("tvNo15.html","_self");
        z++;
    }

    if(z==0)
    {
        alert('Sorry No Match Found')
    }
}


//Search list for mobile devices


function searchInputList1(){
    var search=document.getElementById('customText').value.toUpperCase();
    var listItem=document.getElementsByClassName('sList');
    

    for(var i=0;i<listItem.length;i++){
        var z=document.getElementsByClassName('uListAnchor')[i].innerHTML;
        var y=z.toUpperCase();
        
        if(y.indexOf(search)>-1){
            listItem[i].style.display="block"
        }else{
            listItem[i].style.display="none" 
        }
    }

    if(search==""){

        var j=listItem.length;
        for(var h=0;h<j;h++){
            listItem[h].style.display="none";
        }
    }
}


function searchIconClicked1(){
    
    z=0;
    var search=document.getElementById('customText').value;
    
    if(search.localeCompare("Pawankhind")==0)
    {
        window.open("movieNo1.html","_self");
        z++;
    }

    if(search.localeCompare("KGF_Chapter2")==0)
    {
        window.open("movieNo2.html","_self");
        z++;
    }

    if(search.localeCompare("Heropanti2")==0)
    {
        window.open("movieNo3.html","_self");
        z++;
    }

    if(search.localeCompare("RRR")==0)
    {
        window.open("movieNo4.html","_self");
        z++;
    }

    if(search.localeCompare("Bachchhan_Pande")==0)
    {
        window.open("movieNo5.html","_self");
        z++;
    }

    if(search.localeCompare("IronMan")==0)
    {
        window.open("movieNo6.html","_self");
        z++;
    }

    if(search.localeCompare("IronMan2")==0)
    {
        window.open("movieNo7.html","_self");
        z++;
    }

    if(search.localeCompare("Avengers_Endgame")==0)
    {
        window.open("movieNo8.html","_self");
        z++;
    }

    if(search.localeCompare("Bheeshma")==0)
    {
        window.open("movieNo9.html","_self");
        z++;
    }

    if(search.localeCompare("Doctor_Strange")==0)
    {
        window.open("movieNo10.html","_self");
        z++;
    }

    if(search.localeCompare("Eternals")==0)
    {
        window.open("movieNo11.html","_self");
        z++;
    }

    if(search.localeCompare("Beast")==0)
    {
        window.open("movieNo12.html","_self");
        z++;
    }

    if(search.localeCompare("Spider_Man_No_Way_To_Home")==0)
    {
        window.open("movieNo13.html","_self");
        z++;
    }

    if(search.localeCompare("Ghazi_Attack")==0)
    {
        window.open("movieNo14.html","_self");
        z++;
    }

    if(search.localeCompare("Valamai")==0)
    {
        window.open("movieNo15.html","_self");
        z++;
    }

    if(search.localeCompare("Marshal")==0)
    {
        window.open("movieNo16.html","_self");
        z++;
    }

    if(search.localeCompare("IronMan3")==0)
    {
        window.open("movieNo17.html","_self");
        z++;
    }

    if(search.localeCompare("Pushpa")==0)
    {
        window.open("movieNo18.html","_self");
        z++;
    }

    if(search.localeCompare("FilmFare_Award2021")==0)
    {
        window.open("tvshowsNo1.html","_self");
        z++;
    }

    if(search.localeCompare("Kapil_Sharma_Episode67")==0)
    {
        window.open("tvshowsNo2.html","_self");
        z++;
    }

    if(search.localeCompare("Kapil_Sharma_Episode68")==0)
    {
        window.open("tvshowsNo3.html","_self");
        z++;
    }

    if(search.localeCompare("Kapil_Sharma_Episode69")==0)
    {
        window.open("tvshowsNo4.html","_self");
        z++;
    }

    if(search.localeCompare("FilmFare_Award2022")==0)
    {
        window.open("tvshowsNo5.html","_self");
        z++;
    }

    if(search.localeCompare("Mirchi_Music_Award2022")==0)
    {
        window.open("tvshowsNo6.html","_self");
        z++;
    }

    if(search.localeCompare("Crushed")==0)
    {
        window.open("webSeriesNo1.html","_self");
        z++;
    }

    if(search.localeCompare("Halo_NightFall")==0)
    {
        window.open("webSeriesNo2.html","_self");
        z++;
    }

    if(search.localeCompare("Mirzapur")==0)
    {
        window.open("webSeriesNo4.html","_self");
        z++;
    }

    if(search.localeCompare("Money_Heist_Season5")==0)
    {
        window.open("webSeriesNo5.html","_self");
        z++;
    }

    if(search.localeCompare("Money_Heist_Season1")==0)
    {
        window.open("webSeriesNo6.html","_self");
        z++;
    }

    if(search.localeCompare("Money_Heist_Season3")==0)
    {
        window.open("webSeriesNo7.html","_self");
        z++;
    }

    if(search.localeCompare("Money_Heist_Season4")==0)
    {
        window.open("webSeriesNo8.html","_self");
        z++;
    }

    if(search.localeCompare("Rudra_The_Edge_Of_Darkness")==0)
    {
        window.open("webSeriesNo9.html","_self");
        z++;
    }

    if(search.localeCompare("Scam1992")==0)
    {
        window.open("webSeriesNo10.html","_self");
        z++;
    }

    if(search.localeCompare("Squid_Game")==0)
    {
        window.open("webSeriesNo11.html","_self");
        z++;
    }

    if(search.localeCompare("Family_Man_Season1")==0)
    {
        window.open("webSeriesNo12.html","_self");
        z++;
    }

    if(search.localeCompare("Family_Man_Season2")==0)
    {
        window.open("webSeriesNo13.html","_self");
        z++;
    }

    if(search.localeCompare("Flash_Season1")==0)
    {
        window.open("webSeriesNo14.html","_self");
        z++;
    }

    if(search.localeCompare("Kota_Factory")==0)
    {
        window.open("webSeriesNo15.html","_self");
        z++;
    }

    if(search.localeCompare("Money_Heist_Season2")==0)
    {
        window.open("webSeriesNo16.html","_self");
        z++;
    }

    if(search.localeCompare("MoonKnite")==0)
    {
        window.open("webSeriesNo17.html","_self");
        z++;
    }

    if(search.localeCompare("Game_Of_Thrones_Episode1")==0)
    {
        window.open("webSeriesNo18.html","_self");
        z++;
    }

    if(search.localeCompare("Game_Of_Thrones_Episode2")==0)
    {
        window.open("webSeriesNo19.html","_self");
        z++;
    }

    if(search.localeCompare("Game_Of_Thrones_Episode3")==0)
    {
        window.open("webSeriesNo20.html","_self");
        z++;
    }

    if(search.localeCompare("Game_Of_Thrones_Episode4")==0)
    {
        window.open("webSeriesNo21.html","_self");
        z++;
    }

    if(search.localeCompare("Game_Of_Thrones_Episode5")==0)
    {
        window.open("webSeriesNo22.html","_self");
        z++;
    }

    if(search.localeCompare("Game_Of_Thrones_Episode6")==0)
    {
        window.open("webSeriesNo23.html","_self");
        z++;
    }

    if(search.localeCompare("NDTV_India")==0)
    {
        window.open("tvNo1.html","_self");
        z++;
    }

    if(search.localeCompare("V6_News")==0)
    {
        window.open("tvNo2.html","_self");
        z++;
    }

    if(search.localeCompare("CNN_News")==0)
    {
        window.open("tvNo3.html","_self");
        z++;
    }

    if(search.localeCompare("Aljazeera")==0)
    {
        window.open("tvNo4.html","_self");
        z++;
    }

    if(search.localeCompare("Zee_News")==0)
    {
        window.open("tvNo5.html","_self");
        z++;
    }

    if(search.localeCompare("DW_English")==0)
    {
        window.open("tvNo6.html","_self");
        z++;
    }

    if(search.localeCompare("R.Bharat")==0)
    {
        window.open("tvNo7.html","_self");
        z++;
    }

    if(search.localeCompare("Nasa")==0)
    {
        window.open("tvNo8.html","_self");
        z++;
    }

    if(search.localeCompare("DD_News")==0)
    {
        window.open("tvNo9.html","_self");
        z++;
    }

    if(search.localeCompare("Sky_News")==0)
    {
        window.open("tvNo10.html","_self");
        z++;
    }

    if(search.localeCompare("Mastii")==0)
    {
        window.open("tvNo11.html","_self");
        z++;
    }

    if(search.localeCompare("Tv9_Marathi")==0)
    {
        window.open("tvNo12.html","_self");
        z++;
    }

    if(search.localeCompare("News_24_Think_First")==0)
    {
        window.open("tvNo13.html","_self");
        z++;
    }

    if(search.localeCompare("ABP_Ganga")==0)
    {
        window.open("tvNo14.html","_self");
        z++;
    }

    if(search.localeCompare("News_Nation")==0)
    {
        window.open("tvNo15.html","_self");
        z++;
    }

    if(z==0)
    {
        alert('Sorry No Match Found')
    }
}