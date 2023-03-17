const autoCompleteConfig = {
    renderOption(title) {
        const imgSrc = title.Poster === "N/A" ? "" : title.Poster;
        return `
        <img src= "${title.Poster}" />
        ${title.Title}
       `;
    },
    onOptionSelect(title){
        document.querySelector('.tutorial').classList.add('is-hidden');
        ontitleSelect(title);
    },
    inputValue(title){
        return title.Title;
    },
    async fetchData(searchTerm) {
        const response = await axios.get("https://www.omdbapi.com/", {
            params: {
                apikey: "94ec03dc",
                s: searchTerm, // gives searching directory
                // i : "tt2395427" // for getting followup or Only one title's detail
            },
        });
    
        if (response.data.Error) {
            return [];
        }
    
        return response.data.Search;
    }


}


createAutoComplete({
    ...autoCompleteConfig,
    root : document.querySelector('.left-autocomplete'),
    onOptionSelect(title){
        document.querySelector('.tutorial').classList.add('is-hidden');
        ontitleSelect(title,document.querySelector('#left-summary'),'left');
    }
   
});
createAutoComplete({
    ...autoCompleteConfig,
    root : document.querySelector('.right-autocomplete'),
    onOptionSelect(title){
        document.querySelector('.tutorial').classList.add('is-hidden');
    ontitleSelect(title,document.querySelector('#right-summary'),'right');
    }
   

});

// createAutoComplete({
//     root : document.querySelector('.autocomplete3') 
// });
// createAutoComplete({
//     root : document.querySelector('.autocomplete2')  
// });


// Code for selecting 1 title in Dropdown menu
let leftMovie;
let rightMovie;

const ontitleSelect = async (title,summaryElement,side) => {




console.log("i'm here");

    console.log(title);
    const response = await axios.get("https://www.omdbapi.com/", {
        params: {
            apikey: "94ec03dc",
            // s : searchTerm, // gives searching directory
            i: title.imdbID, // for getting followup or Only one title's detail
        },
    });

   summaryElement.innerHTML = titleTemplate(response.data);

   if (side === 'left') {
    leftMovie = response.data;
  } else {
    rightMovie = response.data;
  }

  if (leftMovie && rightMovie) {
    runComparison();
  }
};

const runComparison = () => {

    const leftSideStats = document.querySelectorAll('#left-summary .notification');
    const rightSideStats = document.querySelectorAll('#right-summary .notification');

  
    leftSideStats.forEach((leftStat,index) => {
                 const rightStat = rightSideStats[index];

                const leftSideValue = parseInt(leftStat.dataset.value);
                const rightSideValue = parseInt(rightStat.dataset.value);

                if(rightSideValue > leftSideValue){
                    leftStat.classList.remove('is-primary');
                    leftStat.classList.add("is-warning");
                }
                else{
                    rightStat.classList.remove("is-primary");
                    rightStat.classList.add('is-warning');
                    
                }
    });
}

const titleTemplate = titleDetail => {

    const dollar = titleDetail.BoxOffice.replace(/\$/g,'').replace(/,/g,'');
    
    const metaScore = parseInt(titleDetail.Metascore);
    const imdbRating = parseFloat(titleDetail.imdbRating);
    const imdbVotes = parseInt(titleDetail.imdbVotes.replace(/,/g,''));
    

    const awards = titleDetail.Awards.split(' ').reduce((prev , word)=> {
        const value = parseInt(word);

        if(isNaN(value)){
            return prev;

        }
        else{
           return prev+value;
        }
        
    },0);

    console.log(awards);

    return `
      <article class="media">
        <figure class="media-left">
          <p class="image">
            <img src="${titleDetail.Poster}" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h1>${titleDetail.Title}</h1>
            <h4>${titleDetail.Genre}</h4>
            <p>${titleDetail.Plot}</p>
          </div>
        </div>
      </article>
      <article data-value=${awards} class="notification is-primary">
      <p class="title">${titleDetail.Awards}</p>
      <p class="subtitle">Awards</p>
    </article>
    <article data-value=${dollar} class="notification is-primary">
      <p class="title">${titleDetail.BoxOffice}</p>
      <p class="subtitle">Box Office</p>
    </article>
    <article data-value=${metaScore} class="notification is-primary">
      <p class="title">${titleDetail.Metascore}</p>
      <p class="subtitle">Metascore</p>
    </article>
    <article data-value=${imdbRating} class="notification is-primary">
      <p class="title">${titleDetail.imdbRating}</p>
      <p class="subtitle">IMDB Rating</p>
    </article>
    <article data-value=${imdbVotes} class="notification is-primary">
      <p class="title">${titleDetail.imdbVotes}</p>
      <p class="subtitle">IMDB Votes</p>
    </article>
    `;
  };
