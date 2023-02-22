/*
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result.
*/

const oldFriends=['abul', 'kabul', 'mokbul', 'shakib','khan'];

const newFriends=[];

const splitsFriends=array=>{
    for (const friend of array) {
        const friendNameLength=friend.length;
        if (friendNameLength%2==0) {
            newFriends.push(friend);
        }
    }
}
splitsFriends(oldFriends);
console.log(newFriends);
