// document.addEventListener("mouseover", myFunction);
// document.addEventListener("click", someOtherFunction);
// document.addEventListener("mouseout", someOtherFunction);
// document.addEventListener("dbl",fun);

 
// document.querySelector('.pink').addEventListener('mouseleave',function(){
//     console.log("entered in");
// })

// document.querySelector('.container').addEventListener('mousemove',function(e){
//     console.log(e.offsetX,e.offsetY);
    
//     console.log("entered in");
// })
console.log("i lov  js");

document.getElementById("btn").addEventListener("click",fun);

function fun(e){
    console.log("thank you",e);
    e.preventDefault();

    
   location.href='//codewithharry.com';

}