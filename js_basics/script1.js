let result1=10-"4";
console.log(result1);//6
console.log(typeof result1);//number

console.log(true+3);//4
console.log(false+3);//3

let result2="hi"+1;
console.log(result2);//hi1  
console.log(typeof result2);//string

let result3="value is "+true;
console.log(result3);//value is true
console.log(typeof result3);//string

let strNumber1="123";
let num1=Number(strNumber1);//converting string to number
console.log(num1);//123
console.log(typeof num1);//number

let number1=123;
let str1=String(number1);//converting number to string
console.log(str1 ,typeof str1);//123 string

let strNumber2="123.45";
let num2=parseInt(strNumber2);//converting string to number
console.log(num2);//123
console.log(typeof num2);//number

let bol1=true;
let str2=String(bol1);      
console.log(str2 ,typeof str2);//true string

let strNumber3="123.45";
let num3=parseFloat(strNumber3);//converting string to number
console.log(num3);//123.45
console.log(typeof num3);//number

function add(a,b){
    let res = a+b;
    console.log(res);//adding two numbers
    return res;
}

let a=add(10,20);   
console.log(a);//30`


//arrow function
let add1=(a,b)=>{
    let res = a+b;
    console.log(res);//adding two numbers
    return res;//adding two numbers 
}

let arr =[1,2,3,5,8,13,21,34,55,89];
let resul = arr.map((x)=>{
    return x*x
});//map function is used to iterate over the array and return a new array with the square of each element

let arr3=["apple","banana","cherry","date","apple","apple"];
let uniqueArr = [...new Set(arr3)]; // Remove duplicates
// Retrieve all apple
let appleArr = arr3.filter((fruit) => fruit === "apple");

//filterthe fruits whose lenghth is greater than 5
let arr2=["apple","banana","cherry","date","apple","apple"];
let longFruits = arr2.filter((fruit) => fruit.length > 5);      

//filter age greater than 18
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 15 },
    { name: "Eve", age: 22 }
]; 
let adults = people.filter((person) => person.age > 18);        

//filter

function fun(a,a){
    console.log("hello");
}
fun(5,10);//this will give error because we cannot have two parameters with the same name in a function


 var b= function fun{
    console.log("hello");
}

let student ={
    id:101,
    name:"John",
    marks:85,
}
//bracket notation
console.log(student["name"]);//John
console.log(student["marks"]);//85


//dot notation
console.log(student.name);//John
console.log(student.marks);//85


student.city="New York";//adding new property to object
console.log(student.city);//New York
delete student.marks;//deleting property from object
console.log(student.marks);//undefined

let student1 ={
    id:102,
    name:"Alice",
    marks:90,
    address:{
        city:"mathura",
        state:"UP"}
}

let query = student1.address.city;//accessing nested object property
console.log(query);//mathura0200


//array with 5 elements id,name,mards,address,city
let student2 ={
    id:103,     
    name:"Bob",
    marks:75,
    address:{
        city:"Agra",
        state:"UP"          
    }
}

let listOfStudents = [
    { id: 101, name: "John", marks: 85, address: { city: "New York", state: "NY" } },
    { id: 102, name: "Alice", marks: 90, address: { city: "Los Angeles", state: "CA" } },
    { id: 103, name: "Bob", marks: 75, address: { city: "Chicago", state: "IL" } },
    { id: 104, name: "Charlie", marks: 80, address: { city: "Houston", state: "TX" } },
    { id: 105, name: "David", marks: 95, address: { city: "Phoenix", state: "AZ" } }        
];//array of objects
for(let x of listOfStudents){
    let ans ='my id is '+x.id+' my name is '+x.name+' my marks are '+x.marks+' my city is '+x.address.city;
    console.log(ans);
}//for of loop to iterate over the array of objects and print the details of each student

