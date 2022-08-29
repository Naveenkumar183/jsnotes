console.log("welcome to dom tutorial");

let d=document.links;
let b=d[0].href.includes("u");
//onsole.log(b);

//sindle elment selector and multielemnt selector
let f=document.getElementById("naveen");
let s=document.getElementById("nar");
//f=f.className;
//f=f.childNodes;
//f=f.parentNode;
f.style.color="white";
f.style.background="violet"
f.style.width="30%"
f.style.margin="10px"

s.style.color="white";
s.style.background="violet"
f.innerText="naveen is good boy";
f.innerHTML="<b>naveen is good boy</b>"
//console.log(f.innerHTML)
//console.log(f);

let sel=document.querySelector("#naveen");
sel=document.querySelector("div")

//console.log(sel)

//multielment selector
let dam=document.getElementsByClassName("child")
console.log(dam);
Array.from(dam).forEach(function(element) {
    console.log(element);
});
