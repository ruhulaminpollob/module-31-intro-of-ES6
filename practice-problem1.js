// 1 Write an arrow function that will take 3 parameters, will multiply
//the parameters and will return the result.

const multiply=(num1,num2,num3)=>num1*num2*num3;
console.log(multiply(1,3,4));

//2. Write the following sentence in three lines and print the result:
//I am a web developer. I love to code. I love to eat biryani.
const threeSentence=`I am a wev developer. 
I love to code. 
I love to eat Biriyani.`
console.log(threeSentence);

// 3. Write an arrow function that will take 2 parameters: One parameter
//will come from you and the other parameter will be a default
//parameter. Add these two parameters and return the result.

const fullName=(firstName, lastName='mondol')=>firstName+' '+lastName;

console.log(fullName('pollob'));