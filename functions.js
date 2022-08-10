//Create one function with zero parameter having a console statement;
function text(){
    console.log("Console statement is here");
}
text();
//Console statement is here

//Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function add(a,b){
    let result=a+b;
    console.log(result);
}
add(3,4);
//7

//Create one arrow function

const arrow=()=>{
    console.log("Arrow Function");
}
arrow();
//Arrow Function

// //Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};

girl();
console.log(girl);
//undefined


// "Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
girl();
//21
//undefined

// "Print output

// var x = 21;
// a();
// b();
// console.log(a);
// a = function() {
    
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// };

//Uncaught ReferenceError: a is not defined


 //Write a function that accepts parameter n and returns factorial of n

const factorial=(n)=>{
    let fact=1;
    for(i=1;i<=n;i++){
        fact=fact*i;
    }
 return fact;
}
console.log(factorial(4));
