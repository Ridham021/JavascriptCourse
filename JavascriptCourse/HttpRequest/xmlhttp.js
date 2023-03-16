
const myReq = new XMLHttpRequest();

myReq.addEventListener('load',() => {
    console.log("it worked...");
   const data = JSON.parse(myReq.responseText);
   console.log(data);
})

myReq.addEventListener('error',() => {
    console.log('Error..........!!!!!!!!!!');
})

myReq.open('GET','https://swapi.dev/api/planets/12');
//myReq.setRequestHeader();
myReq.send();
console.log('Request sent');