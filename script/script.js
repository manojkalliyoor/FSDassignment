var email=document.getElementById("inputEmail");
var password=document.getElementById("inputPassword");
var cnfpswd=document.getElementById("confirmPassword");
const indicator=document.querySelector(".indicator");
const input=document.querySelector(".pswtxt");
const weak=document.querySelector(".weak");
const medium=document.querySelector(".medium");
const text2=document.querySelector(".text2");

let regExpWeak=/^[a-z]/;
let regExpMedium=/^\d+/;
let regExpStrong=/^.[!,@,#,$,%,*,?,_,~,-,(,)]/;
function trigger(){
    if(input.value!=""){
        indicator.style.display="block";
        indicator.style.display="flex";
        if(input.value.length>=3 && (input.value.match(regExpWeak)|| input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
        if(input.value.length>=6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak)))) no=2;
        if(input.value.length>=6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) || input.value.match(regExpStrong))no=3;
        if(no == 1){
            weak.classList.add("active");
        }
    }else{
    }

}
function validateName(){
    var name=document.getElementById("inputFullName");
    if(name.value.length == 0){
        name.style.border="2px solid red";
        return false;
    }
    else if(!name.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*/)){
        name.style.border="2px solid red";
        return false;
    }
    name.style.border="2px solid green";
    return true;
}
function validateEmail(){
    if(email.value.length == 0){
        email.style.border="2px solid red";
        return false;
    }
    else if(!email.value.match(/^([A-Za-z0-9\-.]+)@([A-Za-z0-9\-]+).([a-z{2,3}]+)([.a-z{2,3}?]+)/)){
        email.style.border="2px solid red";
        return false;
    }
    email.style.border="2px solid green";
    return true;
}
function validatepswd(){
    
    if(password.value.length==0){
        password.style.border="2px solid red";
        return false;
    }
    else if(!password.value.match(/^[A-Za-z0-9\-!@#$%^&*()_+=".]+/)){
        password.style.border="2px solid red";
        return false;
    }
    password.style.border="2px solid green";
    return true;
}
function validatecnfmpswd(){
    
    if(cnfpswd.value.length==0){
        cnfpswd.style.border="2px solid red";
        return false;
    }
    else if(!cnfpswd.value.match(/^[A-Za-z0-9\-!@#$%^&*()_+=".]+/)){
        cnfpswd.style.border="2px solid red";
        return false;
    }
   if(password.value==cnfpswd.value)
   {
       cnfpswd.style.border="2px solid green";
       return true;
   }
   else{
    cnfpswd.style.border="2px solid red";
    password.style.border="2px solid red"
    return true;
   }
}
function validatephno(){
    var phno=document.getElementById("inputPhno");
    if(phno.value.length==0){
        phno.style.border="2px solid red";
        return false;
    }
    else if(!phno.value.match(/^[0-9]+/)){
        phno.style.border="2px solid red";
        return false;
    }
    else if(phno.value.length>10){
        phno.style.border="2px solid red";
        return false;
    }
    else if(phno.value.length==10){
        phno.style.border="2px solid green";
        return true;
    }
    }

  