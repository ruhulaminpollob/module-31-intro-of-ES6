// destructuring object

const fish={
    name:'puti',
    color:'silver',
    age:5,
}
// const name=fish.name;
// console.log(name);

const {name,age}=fish;
console.log(age);
// destructuring array
const players=['masrafi', 'messi', 'rolando','pollob'];
const [bangladeshi, favorite, portugal, ami]=players;
console.log(favorite,ami);