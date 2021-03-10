const pubkey = "4f82b7a10e0ace74012143482aebfa7f";
const pvtkey = "92c3723fcf94b36ea4f8e86b20324f5ece4d1f04";
const ts = new Date().getTime()
const message = ts+pvtkey+pubkey;
const hash = CryptoJS.MD5(message);


const input = document.querySelector('#blank')

const button = document.querySelector('#search')

const heroForm = document.querySelector('#hero-form')

//Event listeners for form and search button

heroForm.addEventListener('submit', (event) => {
  event.preventDefault()
  // console.log("input field works") -> testing form listener
  findHero(event)
})
 
button.addEventListener('click', (event) => {
  // console.log("button works too") -> testing button functionality 
  findHero(event)
})

//rendering results on the page 

function removeOldHero() {
  div.innerHTML = ''
}

function removeOldDescription() {
  divDetails.innerHTML = ''
}

const div = document.querySelector('.hero-list')


function displayHeroPicture(thumbnail) {
  let heroThumbnail = document.createElement("img")
  heroThumbnail.src = thumbnail
  div.appendChild(heroThumbnail)
};

const divDetails = document.querySelector('.hero-description')

function displayHeroDescription(details) {
  removeOldDescription()
  let heroDetails = document.createElement("p")
  heroDetails.innerHTML = details
  divDetails.appendChild(heroDetails)
}


function displayHeroComics(heroComics) {
  let heroComicCollection = document.createElement("h2")
  heroComics.src = heroComics
  div.appendChild(heroComicCollection)
}

function displayResults(hero) {
  removeOldHero()
  displayHeroPicture(`${hero.thumbnail.path}.${hero.thumbnail.extension}`)
  displayHeroDescription(`${hero.description}`)
  displayHeroComics(`${hero.comics.collectionURI}`)  
}

async function findHero(event) {
  const URL = 'https://gateway.marvel.com/v1/public/characters?ts='+ ts +'&name=' + input.value + '&apikey=' + pubkey + "&hash=" + hash
  try {
    const response = await axios.get(URL)
    console.log(response.data.data.results[0]) 
    displayResults(response.data.data.results[0])  
    findHeroComics(response.data.data.results[0].id)
  } catch (err) {
    console.log(err.message)
  }
}

async function findHeroComics(characterId) {
  const comicURL = 'https://cors-rach.herokuapp.com/http://gateway.marvel.com/v1/public/characters/' + characterId + '/comics?ts='+ ts + '&apikey=' + pubkey + "&hash=" + hash
  try {
    const comicResponse = await axios.get(comicURL,{headers: {"Access-Control-Allow-Origin": "*"}})
    console.log(comicResponse.data) 
    displayHeroComics(comicResponse.data)  
  } catch (err) {
    console.log(err.message)
  }
}