const leftIconEl = document.querySelector(`.left-icon`);
const sideBarEl = document.querySelector(`.side-bar`);
const sideBarBtnCloseEl = document.querySelector(`.close`);
const searchBarEl = document.querySelector(`.wrap`);
const searchBoxEl = document.querySelector(`.search-box`);
const imgEl = document.querySelector(`.img`);

let manName = "";


let flage = false;
let searchBarFlage = false;





leftIconEl.addEventListener("click", () => {
    if (!flage) {
        sideBarEl.classList.remove(`hide`);
        flage = true;
    } else if (flage) {
        sideBarEl.classList.add(`hide`);
        flage = false;
    }
});

sideBarBtnCloseEl.addEventListener(`click`, () => {
    if (flage) {
        sideBarEl.classList.add(`hide`);
        flage = false;
    }
})

document.addEventListener(`keydown`, (e) => {
    if (e.ctrlKey && e.key === "/" && !searchBarFlage) {
        searchBarEl.classList.remove(`hide`)
        searchBarFlage = true;
    } else if (e.ctrlKey && e.key === "/" && searchBarFlage) {
        searchBarEl.classList.add(`hide`);
        searchBarFlage = false;
    }
});


searchBoxEl.addEventListener(`click`, () => {
    if (!searchBarFlage) {
        searchBarEl.classList.remove(`hide`);
        searchBarFlage = true;
    } else if (searchBarFlage) {
        searchBarEl.classList.add(`hide`);
        searchBarFlage = false;
    }
});


window.onload = async () => {
    Name(); // Ensure manName is assigned before using it in the API URL.
    const apiKey = `https://api.unsplash.com/search/photos?query=${manName}&client_id=tJMwWw8CimxnWPShEBioI23msGsU4rATlkd1E2h7J0Q`;
    try {
        const api = await fetch(apiKey);
        const data = await api.json();
        const url = data.results[0].urls.full;
        imgEl.src = url;
        console.log(url);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


const Name = () => {
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum === 1) {
        manName = "girl";
    } else if (randomNum === 2) {
        manName = "man";
    } else if (randomNum === 3) {
        manName = "police";
    } else if (randomNum === 4) {
        manName = "official man";
    } else if (randomNum === 5) {
        manName = "boy models";
    }
    console.log(manName)
}



