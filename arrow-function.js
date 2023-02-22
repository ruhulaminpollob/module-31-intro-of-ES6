//  regular declare 
 function add(num1, num2) {
    return num1+num2;
 }
// regular anonymous function
 const add2=function (num1, num2) {
    return num1+num2;
 }
// arrow function
 const add3=(num1, num2)=>num1+num2;
 const total=add3(10,12);
 console.log(total);