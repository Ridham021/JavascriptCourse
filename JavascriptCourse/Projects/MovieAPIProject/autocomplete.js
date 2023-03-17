
const createAutoComplete = ({root , renderOption , onOptionSelect , inputValue , fetchData}) => {
    
    root.innerHTML = `
        <label><b>Serach for title</b></label>
        <input class="input" />
        <div class="dropdown ">
          <div class="dropdown-menu">
            <div class="dropdown-content results"></div>
          </div>
        </div>
    `;
    
    const input = root.querySelector("input");
    const dropdown = root.querySelector(".dropdown");
    const resultsWrapper = root.querySelector(".results");
    
    const onInput = async (event) => {
        const titles = await fetchData(event.target.value);
    
        if (!titles.length) {
            dropdown.classList.remove("is-active");
            return;
        }
    
        resultsWrapper.innerHTML = "";
        dropdown.classList.add("is-active");
        for (let title of titles) {
            const option = document.createElement("a");
         
    
            option.classList.add("dropdown-item");
    
            option.innerHTML = renderOption(title);
    
            option.addEventListener("click", () => {
                console.log("option clicked");
                dropdown.classList.remove("is-active");
                input.value =   inputValue(title);
    
                onOptionSelect(title);
            });
    
            resultsWrapper.appendChild(option);
        }
    };
    
    input.addEventListener("input", debounce(onInput, 1000));
    
    document.addEventListener("click", (event) => {
        if (!root.contains(event.target)) {
            dropdown.classList.remove("is-active");
        }
    });
};

