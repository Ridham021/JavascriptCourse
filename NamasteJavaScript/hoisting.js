

// var a = 7;
// setTimeout(x,1000);
// function x(){
//     alert("This is x");
// }

// console.log("1000");
// setTimeout((function getName(){
//     console.log("Namaste Javascript");
// }),6000)


// console.log(a)


// for(let i=0;i<100000;i++){
//     console.log(i);
// }


// window.onload = function attachEventListener(){

// let count=0;

// // document.getElementById("myButton").addEventListener("click",function xyz() {
// //     // document.write("Button clicked - ",++count);
// //     console.log("button clicked : ",++count);
// // })

// document.getElementById("myButton").addEventListener("click",function abc (){
    
//    // document.write("button clicked : ",++count);
//     console.log(++count);
// });
// }

//attachEventListener();


function attach(){

    let c=0;

    document.getElementById("myButton").addEventListener("click",function pqr (e){

        console.log(++c);
    })
}

attach();

