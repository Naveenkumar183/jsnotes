// const pink=[1,2,3,4];
// console.log(pink);
//    console.log(...pink);
//    const pinki=[...pink,5,6,7,8];
//    console.log(pinki);
// Asynchronous programming
console.log("welcome to tut10");
function nav(){
for(let index=0;index<5;index++){
    console.log(index);
}
}
setTimeout(nav,100);
console.log("done printing");

function show(){
let datetime=new Date();
 let time=datetime.toLocaleTimeString();
console.log(time);

}

setTimeout(show,100);
