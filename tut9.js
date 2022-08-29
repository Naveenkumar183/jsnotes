console.log("welcome to ES6 tutorial");

//ES6 class
class employee{
   constructor(name,experience,age){
    this.name=name;
    this.experience=experience;
    this.age=age;

    
   }
  joiningyear(){
    return 2020-this.experience;
  }
  
}


naveen=new employee( 'naveen',8,78);
//prototype inheritance
employee.prototype.gender="male";
console.log(naveen.age);
console.log(naveen.gender);
console.log(naveen.joiningyear());

//default parameter
function sum(x,y=5){
    console.log(x+y);
}

sum(5);

//template literal
const firstname="naveen";
const lastname="kumar";
console.log(`${firstname} ${lastname}`);

// export default function contact() {
//     console.log(" i am from tut9");
// }

//inheritance
class programmer extends employee{
    constructor(name,experience,age,gender,language){
        super(name,experience,age);
        this.gender=gender;
        this.language=language;
    }
    static nanlan(){
        if(this.language=="phython"){
            return "javascript";
        }
    }
}

nandu=new programmer('naveen',8,78,"male","phython");
console.log(nandu.nanlan());
