const pubkey = "4f82b7a10e0ace74012143482aebfa7f";
const pvtkey = "92c3723fcf94b36ea4f8e86b20324f5ece4d1f04";
const hash = () => {
  const ts = new Date().getTime()
  const message = ts + pvtkey + pubkey;
  return [CryptoJS.MD5(message), ts];
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

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

//replacing old data on new search 

function removeOldHero() {
  div.innerHTML = ''
}

function removeOldDescription() {
  divDetails.innerHTML = ''
}

//rendering results on the page

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

function displayResults(hero) {
  removeOldHero()
  displayHeroPicture(`${hero.thumbnail.path}.${hero.thumbnail.extension}`)
  displayHeroDescription(`${hero.description}`)
}

async function findHero(event) {
  clearOldComics ()
  const [hashString, ts] = hash()
  const URL = 'https://gateway.marvel.com/v1/public/characters?ts='+ ts +'&name=' + input.value + '&apikey=' + pubkey + "&hash=" + hashString
  try {
    const response = await axios.get(URL)
    console.log(response.data.data.results[0]) 
    displayResults(response.data.data.results[0])  
    findHeroComics(response.data.data.results[0].id)
  } catch (err) {
    console.log(err.message)
  }
}

//Displaying comic collection

const divComics = document.querySelector('.hero-comics')

function displayComicCollection(comicThumbnails) {
  let comicImg = document.createElement("img")
  comicImg.src = comicThumbnails
  divComics.appendChild(comicImg)
}

const allComicBtn = document.querySelector('.all-comic-btn')
const newSearch = document.querySelector('.new-search')

function getComicCollection(results) {
   //initial 4 results when search button is clicked
  results.slice(-4).forEach(comic => {
  displayComicCollection(`${comic.thumbnail.path}.${comic.thumbnail.extension}`)  
  }); 
  
  //Adding new button to expand comic collection 
  const button = document.createElement('button')
  button.setAttribute('id', 'more-comics')
  button.innerText = "See More Comics"
  allComicBtn.appendChild(button)
  button.addEventListener('click', () => {
    results.slice(0, -4).forEach(comic => {
      displayComicCollection(`${comic.thumbnail.path}.${comic.thumbnail.extension}`)
    })
    allComicBtn.remove()
  })
  
  //adding new button to refresh page when function getComicCollection is run 
  const newSearchBtn = document.createElement('button')
  newSearchBtn.setAttribute('id', 'new-search-btn')
  newSearchBtn.innerText = "Find Another Hero"
  newSearch.appendChild(newSearchBtn)
  newSearchBtn.addEventListener('click', () => {
    window.location.reload()
  })

}

function clearOldComics () {
  while (divComics.firstChild) {
    divComics.removeChild (divComics.firstChild)
  }
  while (allComicBtn.firstChild) {
    allComicBtn.removeChild(allComicBtn.firstChild)
  }
}



//Function to expand results to show 20 comics 
const fullCollection = document.querySelector('#more-comics')

function getFullCollection(allComics) {
  results.forEach(allComics => {
  displayComicCollection(`${comic.thumbnail.path}.${comic.thumbnail.extension}`)  
  }); 
}

async function findAllHeroComics(characterId) {
  console.log(characterId)
  const [hashString, ts] = hash()
  const comicURL = 'https://cors-rach.herokuapp.com/http://gateway.marvel.com/v1/public/characters/' + characterId + '/comics?ts='+ ts + '&apikey=' + pubkey + "&hash=" + hashString
  try {
    const comicResponse = await axios.get(comicURL,{headers: {"Access-Control-Allow-Origin": "*"}})
    console.log(comicResponse.data.data.results) 
    getFullCollection(comicResponse.data.data.results)  
  } catch (err) {
    console.log(err.message)
  }
}


  async function findHeroComics(characterId) {
    const [hashString, ts] = hash()
    const comicURL = 'https://cors-rach.herokuapp.com/http://gateway.marvel.com/v1/public/characters/' + characterId + '/comics?ts=' + ts + '&apikey=' + pubkey + "&hash=" + hashString
    try {
      const comicResponse = await axios.get(comicURL, { headers: { "Access-Control-Allow-Origin": "*" } })
      console.log(comicResponse.data.data.results)
      getComicCollection(comicResponse.data.data.results)
    } catch (err) {
      console.log(err.message)
    }
  }