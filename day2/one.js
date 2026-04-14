// console.log("hi");
// let age="22";
// let name="nani";
// console.log(`his name is ${name} and his age is ${age}`);

let title=document.getElementById("hero");
// title.innerText="this is JAVA SCRIPT NOTES";
title.innerHTML=`<p style="color:maroon">this is JAVA SCRIPT NOTES</p>`;

// title2.innerHTML=`JAVA SCRIPT`;
function myFun(){
    let title2=document.getElementsByClassName('hero2');
    if(title2[0].innerHTML==`<p style="color:maroon">this is JAVA SCRIPT NOTES</p>`){
        title2[0].innerHTML=`<p style="color:grey;border:solid 2px black;padding:10px;border-radius:10px;display:flex;">this is JAVA SCRIPT NOTES</p>`;
    }else{
        title2[0].innerHTML=`<p style="color:maroon">this is JAVA SCRIPT NOTES</p>`;
    }
}