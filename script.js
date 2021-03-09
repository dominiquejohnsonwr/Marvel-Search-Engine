const pubkey = "4f82b7a10e0ace74012143482aebfa7f";
const pvtkey = "92c3723fcf94b36ea4f8e86b20324f5ece4d1f04";
const ts = "timestamp"

pm.environment.set("ts", ts);
pm.environment.set("apikey", pubkey);
const message = ts+pvtkey+pubkey;
const a = CryptoJS.MD5(message);
pm.environment.set("hash", a.toString());

//https://gateway.marvel.com/v1/public/characters?ts={{ts}}&name={{name}}&apikey={{apikey}}&hash={{hash}}

const URL = 


async function findHero(event) {
  try {
    const url = BASE_URL+input.value
    const response = await axios.get(url)
    console.log(response.data.Search)
    displayMovie(response.data.Search)
  } catch (err) {
    console.log(err.message)
  }
}
