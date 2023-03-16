
// let arr = [1,2,3,4,5];

// console.log(arr);

// arr.push(232);

// console.log(arr);


// // Objects

// let student = {
//     name : "ridham",
//     age : 22,
//     tech : "Java"
// };

// // passWord validator exercise

// function isValidPassword(password , username){

//     return password.length >8 && password.indexOf(' ') === -1 && password.indexOf(username) === -1; 

// }

// let ans = isValidPassword('dkfsdklfkfdf','Ridham');

// // Challenge2 - Average

// function avg(arr)
// {
//     let sum = 0;
//    for(num of arr){
//      sum = sum + num;
    
//    }
//    return sum/arr.length;
// }

// console.log(avg([10,20,20,20]));

// // challenge 3 : Playing a card

// function getCard(value,suit){

//    let card = 
//    {
//         value : value,
//         suit : suit
//    }

//    return card;
// }


// // Higher order functions

// const add = function (x,y){
//     return x+y;
// }


// const sub = function (x,y){
//     return x-y;
// }


// const mul = function (x,y){
//     return x*y;
// }


// const div = function (x,y){
//     return x/y;
// }

// let operations = [add,sub,mul,div];
 
// // function As Return values

// function multiplyBy(n)
// {
//     return function(x){
//         return n*x;
//     }
// }

// const triple = multiplyBy(3);

// //--------------------

// function makeBetween(x,y)
// {
//     return function(age){
//         return age>x && age<y;
//     }
// }

// const isChild = makeBetween(0,18);


// every & some

// const words = ["dog","cat","log","bag","wagsddf"];

// const newWord = words.every(word => {
//     return word.length==3;
// })

// const newArr = words.some(word => word.length>4);

// Sorting

// const num = [100,299.45,45.66,32.34,3454,655.67,445.89]

// const badsort = num.sort()

// const ascd = num.sort((a , b) => a - b)

// const desc = num.slice().sort((a , b) => b - a)


// const sum = num.reduce((acc,cur) => {
//     return acc+cur
// },0);


// reduce

// const votes = ['y','n','y','n','y','y','n','y','n','y','y','n','y','n','y']

// const voteCount = votes.reduce((acc,cur) => {
    
//     if(acc[cur]){
//         acc[cur]++;
//     }
//     else{
//          acc[cur] = 1;
//     }
// return acc;
// },{})

// // spread

// const feline = {
//     legs : 4,
//     family : "felidale"
// }

// const host = {
//     ...feline,
//     isGrumpy : true,
//     personality : 'unpredictable'
// }

// // Argument object & Rest

// const num = [1,2,3,4,4,3];      

// function sum(... num)
// {
//     s = 0;
//     for(n of num){
//         s = s+n;
//     }
//     return s;
// }

// // Compounded properties

// const role = 'host';
// const person = 'Ridham';
// const role2 = 'Director';
// const person2 =  'Raj';

// const team = {
//     [role] : person,
//     [role2] : person2
// }


// adding methods to object

const math = {
    numbers : [1,2,3,4,5],
    add: function(x,y) {
        return x+y;
    },
    multiply : (x,y) => x*y , 
    divide : (x,y) => x/y,
    sub : (x,y) => x-y
}

