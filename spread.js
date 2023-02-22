const max=Math.max(1,3,4,5,22,2);
// console.log(max);
const numbers=[1,3,4,6,2,9,22,12];
const largest=Math.max(...numbers);
// console.log(largest);
const numbers2=[...numbers];
numbers.push(55)
numbers2.push(77)
console.log(numbers);
console.log(numbers2);
