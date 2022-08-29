console.log("welcome to tut6");

let divEle=document.createElement("div");
let containers=document.querySelector(".container");
let head=document.getElementById("nav");
divEle.setAttribute("id","new");
divEle.className="hap";
divEle.setAttribute("style","border:2px solid black;paddind:10px;width:40px")
//divEle.innerText="this is fantastic";
let text=document.createTextNode("this is fantasy");

divEle.appendChild(text);
containers.insertBefore(divEle,head);


console.log(divEle);




