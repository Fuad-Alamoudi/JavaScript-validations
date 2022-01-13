var el = document.getElementById('name');
var elemail = document.getElementById('email');
var elpassword = document.getElementById('password');
var elconfirmedPassword = document.getElementById('confirmedPassword');
var elAge = document.getElementById('Age');
var elPhone = document.getElementById('Phone');
var elUrl = document.getElementById('Url');
var elMassage = document.getElementById('Massage');
const patran = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const patranURL = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
// const patranPassword =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$/
el.addEventListener('blur' ,(e)=>{
    e.preventDefault();
    if (el.value.length>3 && el.value.length<10){
        

        var text = "";
        e.target.style.border="2px solid rgb(44 235 41 / 95%)";
        document.getElementById("alert").innerHTML = text;
    }
    else{
        var text = "It must be more than three and less than ten characters";
        e.target.style.border="2px solid rgb(255 0 0 / 95%)";
        document.getElementById("alert").innerHTML = text;
    }
});
elemail.addEventListener('blur' ,(e)=>{
    e.preventDefault();
if (elemail.value.match(patran)) {
        var text = "";
        e.target.style.border="2px solid rgb(44 235 41 / 95%)";
        document.getElementById("alertemail").innerHTML = text;
}
else{
    var text = "It must be more than three and less than ten characters";
    e.target.style.border="2px solid rgb(255 0 0 / 95%)";
    document.getElementById("alertemail").innerHTML = text;
}
});

elpassword.addEventListener('blur' ,(e)=>{
    e.preventDefault();
if (elpassword.value.length > 6) {
        var text = "";
        e.target.style.border="2px solid rgb(44 235 41 / 95%)";
        document.getElementById("alertpassword").innerHTML = text;
}
else{
    var text = "It must be more than three and less than ten characters";
    e.target.style.border="2px solid rgb(255 0 0 / 95%)";
    document.getElementById("alertpassword").innerHTML = text;
}
});

elconfirmedPassword.addEventListener('blur' ,(e)=>{
    e.preventDefault();
if (elconfirmedPassword.value.length > 6 && elpassword.value == elconfirmedPassword.value) {
        var text = "";
        e.target.style.border="2px solid rgb(44 235 41 / 95%)";
        document.getElementById("alertconfirmedPassword").innerHTML = text;
}
else{
    var text = "It must be more than three and less than ten characters";
    e.target.style.border="2px solid rgb(255 0 0 / 95%)";
    document.getElementById("alertconfirmedPassword").innerHTML = text;
}
});
elAge.addEventListener('blur' ,(e)=>{
    e.preventDefault();
if (elAge.value > 18) {
        var text = "";
        e.target.style.border="2px solid rgb(44 235 41 / 95%)";
        document.getElementById("alertAge").innerHTML = text;
}
else{
    var text = "It must be more than three and less than ten characters";
    e.target.style.border="2px solid rgb(255 0 0 / 95%)";
    document.getElementById("alertAge").innerHTML = text;
}
});
elAge.addEventListener('blur' ,(e)=>{
    e.preventDefault();
if (elAge.value > 18) {
        var text = "";
        e.target.style.border="2px solid rgb(44 235 41 / 95%)";
        document.getElementById("alertAge").innerHTML = text;
}
else{
    var text = "It must be more than three and less than ten characters";
    e.target.style.border="2px solid rgb(255 0 0 / 95%)";
    document.getElementById("alertAge").innerHTML = text;
}
});
elPhone.addEventListener('blur' ,(e)=>{
    e.preventDefault();
if (elPhone.value.match(/^777[\d/g]/) && elPhone.value.length == 9) {
        var text = "";
        e.target.style.border="2px solid rgb(44 235 41 / 95%)";
        document.getElementById("alertPhone").innerHTML = text;
}
else{
    var text = "It must be more than three and less than ten characters";
    e.target.style.border="2px solid rgb(255 0 0 / 95%)";
    document.getElementById("alertPhone").innerHTML = text;
}
});
elUrl.addEventListener('blur' ,(e)=>{
    e.preventDefault();
if (elUrl.value.match(patranURL)) {
        var text = "";
        e.target.style.border="2px solid rgb(44 235 41 / 95%)";
        document.getElementById("alertUrl").innerHTML = text;
}
else{
    var text = "It must be more than three and less than ten characters";
    e.target.style.border="2px solid rgb(255 0 0 / 95%)";
    document.getElementById("alertUrl").innerHTML = text;
}
});

elMassage.addEventListener('blur' ,(e)=>{
    e.preventDefault();
if (elMassage.value.length > 20) {
        var text = "";
        e.target.style.border="2px solid rgb(44 235 41 / 95%)";
        document.getElementById("alertMassage").innerHTML = text;
}
else{
    var text = "It must be more than three and less than ten characters";
    e.target.style.border="2px solid rgb(255 0 0 / 95%)";
    document.getElementById("alertMassage").innerHTML = text;
}
});

let darkColor="#222222";
let lightColor='#FFFFFF';
let leDark=document.getElementById('Dark');
let leLigt=document.getElementById('Ligt');
let body=document.body;
let letital=document.getElementById('tital')
leDark.addEventListener('click',(e)=>{
    e.preventDefault();
    if(body.classList.contains('light-mode')){
        body.classList.remove('light-mode');
    }
    body.classList.add('dark-mode');
    letital.classList.add('dark-mode');

});
leLigt.addEventListener('click',(e)=>{
    e.preventDefault();
    if(body.classList.contains('dark-mode')){
        body.classList.remove('dark-mode');
    }
    body.classList.add('light-mode');
    letital.classList.add('light-mode');
    
});
