console.log("welcome to tut3");
//how to remove element for document object model
let element=document.createElement('li');
//adding classname
element.className="childish"
element.id="created";
element.setAttribute("title","my js")
element.innerText="6";
let ul=document.querySelector(".this")
// console.log(ul)
// console.log(element);
ul.appendChild(element);

//how to replace elment
 let ele2=document.createElement('h2');
 ele2.id=("fun");
 ele2.innerText="my name is naveen";
 console.log(ele2);
 let nav=document.querySelector(".pink")
 nav.replaceWith(ele2)

 let nag=document.createElement('li');
 nag.innerText="7";
 console.log(nag)
 let p=document.getElementById("shark");
 let q=document.getElementById("xin")
//  q.replaceWith(nag,document.getElementById("shark"))
// p.replaceWith(nag)
q.removeChild(document.getElementById("shark"));
let i=ele2.getAttribute('id');
console.log(ele2,i);