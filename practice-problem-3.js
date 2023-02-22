/*
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.

*/

const array=[2,4,6,7,3,9,1];
const squareAverage=array=>{
    let squareSum=0;
    for (const number of array) {
        const square=Math.pow(number, 2);
        squareSum+=square;
    }
    return squareSum/2
}
console.log(squareAverage(array));