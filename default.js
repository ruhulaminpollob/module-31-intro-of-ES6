function add(first, second) {
    if(second===undefined){
        second=0;
    }
    const sum=first+second;
    return sum;
}
console.log(add(12));

function sum(num1=0, num2=0) {
    const total=num1+num2;
    return total;
}
console.log(sum(2));


function fullName(firstName='mohammad', lastName='hossain') {
    const name=firstName + ' ' + lastName;
    return name;
}
console.log(fullName('pollob'));