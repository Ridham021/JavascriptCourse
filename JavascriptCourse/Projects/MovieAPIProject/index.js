const fetchData = async (searchTerm) => {
   const response = await axios.get("https://www.omdbapi.com/",{
    params:{
        apikey: '94ec03dc',
        s : searchTerm, // gives searching directory
        // i : "tt2395427" // for getting followup or Only one movie's detail
    }
   });
   console.log(response.data);
}

const input = document.querySelector('input');

let timeoutId;
const onInput = event => {
    if(timeoutId){
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        fetchData(event.target.value);
    },2000);
    
};

input.addEventListener('input' , onInput);

