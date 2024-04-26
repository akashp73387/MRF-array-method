/*  --------------- classes in javascript------------------- 


to create a class 

syntax : 

class classname-us{
    constructor(xxx,yyy,zzz){
    this.xxx=xxx;
    this.yyy=yyy;
    this.zzz=zzz;
    }
}}
variable variablename-us= new-k  classname("xvalue","yvalue",zvalue);
console.log(variablename.xxx,variable.yyy,variablename.zzz) 

-----example----*/

class movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const a = new movie("leo", "red-gaint", "8.00");
const b = new movie("master", "red-gaint", "8.00");
const c = new movie("gilli", "red-gaint", "8.00");
const d = new movie("leo", "red-gaint", "8.00");
console.log(a.title, a.studio, a.rating);
console.log(b.title, b.studio, b.rating);
console.log(c.title, c.studio, c.rating);
console.log(d.title, d.studio, d.rating);

/*-------------------------------------------------------------------------------------------*/

//class with methods

class car {
  drive() {
    console.log("your are driving");
  }
  brake() {
    console.log("your are applying the brake");
  }
}
const a1 = new car();
a1.drive();
a1.brake();

/*---------------------------------------class with setter and getter --------------------------------------------------------- */
/*  to create :

class-k  classname-us{
    constructor(key="value"){
        this.key=key;
    }
    set-k setgetname-us (parameter){
        this.key=parameter;
    }
    get-k setgetname-us (){
        return this.key;
    }
}
variable variablename = new-k classname("setget parameter")
console.log(variablename.setgetname)
*/
class users {
  constructor(name = "test") {
    this.name = name;
  }
  set setget(u) {
    this.name = u;
  }
  get setget() {
    return this.name;
  }
}
const user1 = new users("akash");
console.log(user1.setget);

/*------------------------------uber price task ------------------------------------------ */


class uber {
  constructor(distance, vehicletype, rate) {
    this.distance = distance;
    this.vehicletype = vehicletype;
    this.rate = rate;
  }
  setDistance(dist) {
    this.distance = dist;
  }
  getRideDetails() {
    return `this distance traveled by the customer is  ${this.distance}  and the vehicle type is  ${this.vehicletype} and the fair for one kilometer is  ${this.rate}`;
  }
  getRate(){
  let totalcost = this.distance*this.rate
  return `the total fair for the ride is `+" "+totalcost
  }
}
const customer1= new uber (100,"bike",15);
console.log(customer1.getRideDetails());
console.log(customer1.getRate());



/*-----------------------------------MAP---REDUCE---FILTER---------------------------


-----------------------map array method-----------------------------------------

MAP array method definition:  
 map method create a new array, 
 with the result of calling a provided function on every element

 1.Map :- It iterates/transforms over each and every element in an array and produces a new array.
syntax:- arrayname.map(we need to pass a function)
//with map 
=> It takes function as a parameter and apply on each and every element in an array
=> it returns new array
=> It will be using arrow function maximum (because of memory and time consumption)
=> it is an array method
=> var res = arr.map(()=>{})
=> parameter can be userdefined (ele,element,i,a...)
=> when there is only one line in function there is no need of return


--------------task : multiple each element by  2 in an given array  */


// without map method example :

const array=[12,13,14,15];
const newarray=[];
for(var i=0;i<array.length;i++){
    newarray.push(array[i]*2);
}
console.log(newarray);

// with map method example

// 1. normal function    

const array1=[12,13,14,15]
function foo(ele){
    return ele*2;
}
const newarray1= array1.map(foo);
console.log(newarray1);

// 2. imediately invoked function expression  function 

const array2= [12,13,14,15]
const newarray2=array2.map((function(ele){
   return ele*2;
}))
console.log(newarray2);

// 3.arrow function
const array3=[12,13,14,15];
const newarray3=array3.map((ele)=>{
    return ele*2;
})
console.log(newarray3);

// 4.oneline arrow function , without return keyword

const array4=[12,13,14,15];
const newarray4=array4.map((ele)=>ele*2)
console.log(newarray4);

//test 

const array5=["apple","mango","orange"];
const newarray5= array5.map((ele)=>ele+"s")
console.log(newarray5);

/*-------------------------filter array method----------------------------- 
Filter:-
=> It is basically used to filter
=> used to filter the elements inside the array
=> filter is based on condition
=> It takes function as a parameter and apply on each and every element in an array
=> It returns new array
=>If the condition is true , it will push the element to array else it will be rejected
syntax:- 
arrayname.filter(function)    */


//without filter method 

const arr=[1,2,3,4,5,6,7,8,9];
const narr=[];
for(var i=0;i<arr.length;i++){
      if (arr[i]%2===0){
        narr.push(arr[i]);
      }
}
console.log(narr);

// with filter array method

// 1. normal function 
const arr1=[1,2,3,4,5,6,7,8,9];
function foo1(ele){
    if (ele%2===0){
        return ele;
    }
}
const narr1 = arr1.filter(foo1)
console.log(narr1);

// 2. imediately invoked function execution 

const arr2=[1,2,3,4,5,6,7,8,9];
const narr2= arr2.filter((function(ele){
   if(ele%2===0){
    return ele;
   }
}))
console.log(narr2)

// 3. arrow function 
const arr3=[1,2,3,4,5,6,7,8,9];
const narr3= arr3.filter((ele)=>{
   if(ele%2===0){
    return ele;
   }
})
console.log(narr3);

// 4. oneline arrow function without return 

const arr4=[1,2,3,4,5,6,7,8,9];
const narr4= arr4.filter ((ele)=>ele%2===0)
console.log(narr4);

//task 

const arr5 =[1,2,3,4,5,6,7,8,9];
const narr5= arr5.filter((ele)=>ele>2)
console.log(narr5);

/*-------------------------------------------reduce array method-----------------------------


Reduce :- (Confusing topic because it is not similar to the name)
=> It is generally used when we have to take all the array elements and print the
single value. Example:- greatest number ,sum of an array,....(total,summation)
=> It is an array method
=> syntax:- 
arrayname.reduce((acc,cv)=>{

},acc)    */

// without reduce method :

const ar = [1, 2, 3, 4, 5];
// in loop value will be reassigned so use let variable
let sum = 0;
for (var i = 0; i < ar.length; i++) {
  sum = sum + ar[i];
}
console.log(sum);

// with reduce method :
// for addition accumulator value is zero 

const ar1=[1,2,3,4,5,];
let nar1= ar1.reduce((sum,i)=>{
    return sum+i
},0)
console.log(nar1);

// for multiplication accumulator value is 1 
const ar2 = [1, 2, 3, 4, 5];
let nar2 = ar2.reduce((sum, i) => {
  return sum * i;
}, 1);
console.log(nar2);


// without giving accumulator value 
const ar3 = [1, 2, 3, 4, 5];
let nar3 = ar3.reduce((sum, i) => {
  return sum + i;
}, );
console.log(nar3);
 

/*--------------------FOR EACH -------------------------

For-Each 
=> to print the array elements
=>It is apllicable only for arrays
=> It takes function as a parameter
=>It will apply on each and every element
=> It is generally used for printing
=>It returns undefined     */
 
// without for-each

var rra = [1,2,3,4,5]
for(var i=0;i<rra.length;i++){
    console.log(rra[i]);
}

//with for-each

var rra1 = [100,200,300,400,500]
rra1.forEach((ele)=>console.log(ele))