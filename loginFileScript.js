function submitClicked(){

    localStorage.clear();

    var cname=document.getElementById('uName').value;
    var cemail=document.getElementById('uEmail').value;
    var cmobile=document.getElementById('uMobile').value;

    localStorage.setItem('Name',''+cname);
    localStorage.setItem('Email',''+cemail);
    localStorage.setItem('Mobile',''+cmobile);

    alert("Login SuccessFul..!");
}