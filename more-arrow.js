// single line multi parameter arrow function 
const add1 =(a, b, c, d)=> a+b+c+d;


//single line single parameter arrow function
const add2 =(num)=>num*2;
// single line single parameter arrow function simplify version
const add3=number=>number*3;
// multiline arrow function
const add4=(num1,num2,num3)=>{
    const sum=num1+num2+num3;
    const multiply=sum*2;
    return multiply;
}
const result=add3(5);
console.log(result);