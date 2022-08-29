
  
    // varibles in the javascript
    //var,let,const
    var nav='naveen'
    var na="is greatest"
    
    console.log(nav,na)
  const arr=[1,2,3,4,5];
  console.log(arr);
  arr.push(45);
  console.log(arr);
  {

    na=67
    console.log(na);
  }
  console.log(na);

  //prinmitive data types
  let navi=67.7;
  console.log("my datatype " +(typeof navi))

  let nan=String([1,2,3,4,9]);
  console.log(nan.length,(typeof nan))
  //type conversion and coersion
  console.log("type conversion");
  let an;
  an= String(78);
  console.log(an,(typeof an))
  let date=new Date();
  console.log(date)
  let i=7;
  console.log(i.toString());
  let b=Number("5657");
  console.log(b);

  let number=parseInt('78.90');
  console.log(number.toFixed(6),(typeof number));
  let nai='6'+7
  console.log(nai);
  let nu=Number("dt")
  console.log(nu)

  let j=56.89;
  console.log(Math.floor(j));

  //string method and properties
  console.log("string property");
  let babe="good ";
  const baby="morning "

  console.log(babe+baby+"naveen");

  babe=babe.concat("morning");
  console.log(babe);

  let kem;
  kem="<h1>i love javascript</h1>"
  console.log(kem);
  console.log(kem.length);
  console.log(kem.toUpperCase());
  console.log(kem[0]);
  let kemp="naveen";
  console.log(kemp.indexOf("naveen"));
  console.log(kemp.lastIndexOf("n"));
  console.log(kemp.charAt(1));
  console.log(kemp.endsWith("n"));
  console.log(kemp.includes("p"))
  let h=9;
  console.log(h==="9");
  const age=78;
  //else if statement
  if(age=== 78){
    console.log("true");
  }else{
    console.log("fucked up")
  }

  switch(age){
    case 78:
      console.log("yes");
       break;
    case 23:
      console.log("yes");
    case 67:
      console.log("yes");
    default:
      console.log("fuck");
      break;      
  }
   const ar=[1,2,3,4,'naveen'];
   console.log(ar);

   ar.push("nandu")
   console.log(ar);
   ar.unshift("narayana murthy")
   console.log(ar)
   ar[1]='netravathi'
   console.log(ar)
   console.log(ar.indexOf('naveen'))
   console.log(ar.sort())
   let v=new Array("family");
   console.log(ar.concat(v));
   console.log(Array.isArray(v))
   console.log(ar.reverse());

   //object
   let nama={
    name:"naveen",
    channel:"code with naveen",
    marks:"top"


   }
   console.log(nama["marks"]);
   




  //loops

  let naveenk=8;
  let sum=0;
  for(let i=0;i<naveenk;i++){
    console.log(sum=sum+i);
  }
   //functions
   function greet(){
    console.log("welcome to functions tutorial");
   }

   greet();

   let x=function (num){return num*num};
   console.log(x(4));

   function hap(ter){
    console.log("i love" + ter);
    return 6;
   }
   let ter="lokesh"
  // let ter=prompt("enter ")
    let pak=hap(ter);
    console.log(pak);

    let gp=[1,2,3,4,5];
    gp.forEach(function(element,index){
      console.log(element,index)
    })
 //object

  const jam={
    naam:"naveen",
    fort:1.78
  }
console.log(jam.naam);

console.log(jam["naam"]); 
    
// nested object
const student = { 
  name: 'John', 
  age: 20,
  marks: {
      science: 70,
      math: 75
  }
}

// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student.marks.science); // 70

// object containing method
const person = {
  name: 'John',
  greet: function() { console.log('hello'); }
};

person.greet();

//this use

const person1 = {
  name: 'John',
  age: 30,

  // accessing name property by using this.name
  greet: function() { console.log('The name is' + ' ' + this.name); }
};

person1.greet();

//constructor function

// constructor function
function Person3 () {
  this.name = 'John',
  this.age = 23
}


// create an object
const person3 = new Person3();

console.log(person3.name);

function person4(manname,manage){
  this.name=manname;
  this.age=manage;
  
}

const person5=new person4("xin",67);

console.log(person5.name);

// constructor function
function Person6 (person_name, person_age, person_gender) {

  // assigning  parameter values to the calling object
   this.name = person_name,
   this.age = person_age,
   this.gender = person_gender,

   this.greet = function () {
       return ('Hi' + ' ' + this.name);
   }
}


// creating objects
const person7 = new Person6('John', 23, 'male');
const person8 = new Person6('Sam', 25, 'female');

// accessing properties
console.log(person7.name); // "John"
console.log(person8.name); // "Sam"

//prototype in the javascript
// constructor function
function Person9 () {
  this.name = 'John',
  this.age = 23
}

// creating objects
let persona = new Person9();
let personb = new Person9();

// adding new property to constructor function
Person9.prototype.gender = 'Male';

console.log(persona.gender); // Male
console.log(personb.gender); // Male

//prototupe inheritance
// constructor function
function Person10 () {
  this.name = 'John',
  this.age = 23
}

// creating objects
const personc = new Person10();
const persond = new Person10();

// adding property to constructor function
Person10.prototype.gender = 'male';

// prototype value of Person
console.log(Person10.prototype);

//changing prototype
Person10.prototype={gender:"female"}
console.log(Person10.prototype)

// inheriting the property from prototype
console.log(personc.gender);
console.log(persond.gender);

// constructor function
function Person15 () {
  this.name = 'John',
  this.age = 23
}

// creating objects
const personx= new Person();
const person2y= new Person();

// adding a method to the constructor function
Person.prototype.greet = function() {
  console.log('hello' + ' ' +  this.name);
}

personx.greet(); // hello John
persony.greet(); // hello John

//js window object
let a=window;
a=innerHeight
a=innerWidth
a=scrollY;
console.log(a);

//DOM

