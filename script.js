const pubkey = "4f82b7a10e0ace74012143482aebfa7f";
const pvtkey = "92c3723fcf94b36ea4f8e86b20324f5ece4d1f04";
const ts = new Date().getTime()

// pm.environment.set("ts", ts);
// pm.environment.set("apikey", pubkey);
const message = ts+pvtkey+pubkey;
const hash = CryptoJS.MD5(message);
// pm.environment.set("hash", a.toString());

// const URL = 'https://gateway.marvel.com/v1/public/characters'

const input = document.querySelector('#blank')

const button = document.querySelector('#search')

const heroForm = document.querySelector('#hero-form')


heroForm.addEventListener('submit', (event) => {
  event.preventDefault()
  // console.log("input field works") -> testing form listener
  findHero(event)
})
 
button.addEventListener('click', (event) => {
  // console.log("button works too") -> testing button functionality 
 
})


async function findHero(event) {
  const URL = 'https://gateway.marvel.com/v1/public/characters?ts='+ ts +'&name=' + input.value + '&apikey=' + pubkey + "&hash=" + hash
  try {
    const response = await axios.get(URL)
    console.log(response.data)
  } catch (err) {
    console.log(err.message)
  }
}
