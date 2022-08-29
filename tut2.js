console.log("welcome to tut2");
let g=document.querySelector(".happy")
g=document.querySelector(".container")
console.log(g.childNodes);
let node=g.childNodes[0].nodeName;
let node1=g.childNodes[7].nodeType;
console.log(node);
console.log(node1);
// 1 Element
// 2 attribute
// 3 TextEncoder
// 8 Comment
// 9 document
console.log(g.firstElementChild)
console.log(g.lastElementChild)