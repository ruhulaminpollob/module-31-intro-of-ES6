/*
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.

*/
const array1=[2,4,6,9];
const array2=[1,3,5,7,8];
const maximum=(numbers1,numbers2)=>{
    const newArray=[...numbers1,...numbers2];
    
    console.log(newArray);
    return Math.max(...newArray);
}
console.log(maximum(array1,array2));
