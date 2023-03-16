
fetch("https://swapi.dev/api/planets/12sdfsdf/")
.then((res) => {
    if(res.status  != 200){
        throw new Error(`Status code error : ${res.status}`)
        console.log('Problem.....',res.status);
    }
  
    res.json().then((data) => {
        console.log(data);
    })
})
.catch(function(err) {
   console.log('fetch error',err);
})
