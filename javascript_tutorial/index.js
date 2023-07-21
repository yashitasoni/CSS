// 1) ways to print in javascru=ipt
//console.log("hello world");
//alert("me");
document.write("hello again");
// 2) console API
//console.log("hello world");
//console.warn("this is a warning");
//console.error("this is a error");
/*multi
line
comment */
// 3) variables in javascript
//what are variables? -- containers to store data values
var number1 = 9;
var number2 = 10;
//console.log(number1 + number2);
// 4) data types in javascript
//numbers
var num1 = 1;
var num2 = 7.3;
//string
var str1 = "this is a string";
var str2 = 'this is also a string';
//objects (key-value pairs)
var marks = {
    ravi: 66,
    shubham: 77,
    nitin: 99
}
//console.log(marks);
//booleans
var a = "true";
var b = "false";
//console.log(a,b);

var und = undefined;
//console.log(und); //by default any variable who dont have any value is undefined
var n = null;
//console.log(n);
/*At a very high level there are two types of datatypes -
1)primitive: undefined, null, string,number, boolean , symbol
2)reference data types: arrays and objects
*/
var arr = [1, 3, 2, 4, 5];
//console.log(arr);

//5) operators in javascript
//arithmetics operators
var a = 2;
var b = 7;
/*console.log("the value of a+b is" ,a+b);
console.log("the value of a-b is" ,a-b);
console.log("the value of a*b is", a*b);
console.log("the value of a/b is" ,a/b);*/
//assignment operators
var c = b;
c += 2;
c -= 2;
//console.log(c);
//comparision operators
//console.log(a==b);
//console.log(a<=b);
//logical operators
/*console.log(true && false);
console.log(true||false);
console.log(!false);*/

//functions in javascript
//DRY = do not repeat yourself
//if we see anything in console in blue color it will be number, if black it is a string
function avg(a, b) {
    return (a + b) / 2;
}
/*c1=avg(4,6);
c2=avg(14,16);
console.log(c1);
console.log(c2);
    */
//conditionals in javascript
var age = 7;
/*if(age>8){
    console.log("you are a kid");
}
else{
    console.log("you are not a kid");
}*/
//if else ladder
/*if(age>2 );
{
    console.log("you are not a kid");
}
 if(age>4)
{
    console.log("you are a big kid");
}

else if (age>8)
{
    console.log("you are  a kid");
}
else{
    console.log("you are a small big kid");
}
console.log("end of the ladder");*/

// loops in javascript
var arr = [1, 2, 3, 4, 5, 6];
/*for(var i=0;i<arr.length;i++)
{
    if(i==2) 
    {
        //break;
    
        continue;
    }
    console.log(arr[i]);
}*/
/*arr.forEach(function(element)
{
    console.log(element);
})*/
let j = 0;//has its existence only in a funtion where developed and good for memory management
/*while(j<arr.length)
{
    console.log(arr[j]);
    j++;
}*/
/*do{
    console.log(arr[j]);
    j++;
}while(j<arr.length);*/
let myArr=["fan","camera",null,34,true];
//array methods
//console.log(myArr.length);
myArr.pop(); //will delete last element
//console.log(myArr.length);
myArr.push("yashita");
//console.log(myArr);
//myArr.shift(); //accept 1st element all elements will be in array
//console.log(myArr);
myArr.unshift("harry"); //will add it at 1st place
//console.log(myArr.unshift("harry"));
//.sort function sorts numbers alphabetically

//string methods
let string="hello everyone and yashita";
//console.log(string.length);
//console.log(string.indexOf("and"));
//console.log(string.lastIndexOf("yashita"));
//console.log(string.slice(1,4));
d=string.replace("yashita","betu"); //replace is only for 1st occurence
//console.log(d,string);

//javascript date
/*let mydate=new Date(); 
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getMonth());
console.log(mydate.getSeconds());*/

//Dom manipulation
let elem = document.getElementById('click');
//console.log(elem);
let elemClass=document.getElementsByClassName('container');
//console.log(elemClass);
//elemClass[0].style.background="yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
//console.log(elemClass[0].innerHTML);
//console.log(elemClass[0].innerTEXT); 
tn=document.getElementsByTagName('div');
//console.log(tn);
createdElement=document.createElement('p');
createdElement.innerTEXT="this is a created para";
//tn[0].appendChild(createdElement);
//removeChild removes an element
//selecting using query
sel=document.querySelector('.container'); //for first container
//console.log(sel);
sel=document.querySelectorAll('.container'); //for all container
//console.log(sel);

//events in javascript
function clicked()
{
   // console.log("button was clicked");
}
window.onload=function (){
    //console.log("the document was loaded");

}
firstContainer.addEventListener('click',function(){
   // console.log("click hua");
})
firstContainer.addEventListener('mouseover',function(){
    ///console.log("mouse on container");
})
firstContainer.addEventListener('mouseout',function(){
   // console.log("mouse out of container");
})
firstContainer.addEventListener('mouseup',function(){
    //console.log("mouse up when clicked on container");
})
firstContainer.addEventListener('mouseout',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b>We have clicked</b>";
    //console.log("mouse out of container");
})
let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1]=prevHTML;
    //console.log("mouse up when clicked on container");
})
firstContainer.addEventListener('mousedown',function(){
   // console.log("mouse down  when clicked on container");
})
//setInterval and setTimeout
//Arrow functins
/*function summ(a,b)
{
    return a+b;
}*/
//also
summ=(a,b)=>{
    return a+b;
}
logKaro=()=>{
   // console.log("i am your log ");
}
setTimeout(logKaro,2000); //1st argument is a function and other is time in mili seconds and can be stopped using clearTimeout function
setInterval(logKaro,2000); //har 2 sec k baad hoga
//we can use clearInterval function to stop it
/*
//local storage in java
localStorage.setItem('name','yashita');
localStorage.getItem('name');
localStorage.clear(); // to clear
//json javascript object notation

obj={name:"harry" , length:1};
jso=JSON.stringify(obj);
console.log(jso);
console.log(typeof(jso)); //json uses only double quotes
parsed =JSON.parse(`{"name":"harry" , "length":1}`);
console.log(parsed);
*/
//javascript versions
//template literals backticks
a=35;
console.log(`this is my string ${a}`)