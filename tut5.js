//tutorial on local storage and sessional storage
console.log("thi is tutorial 5");
localStorage.setItem("name","naveen");
let name=localStorage.getItem("name");
console.log(name);
 console.log(localStorage.length);
//  localStorage.clear();
 console.log(localStorage.length);
 //how to clear particular item

 localStorage.removeItem('name');
 console.log(localStorage.length);

 //array in the local storage
 let ar=["nan","nav","nar"];
 localStorage.setItem("obj",JSON.stringify(ar));

 let ame=JSON.parse(localStorage.getItem('obj'));
 console.log(ame);
 

//same for sessiomstorage instead on local replace it with session