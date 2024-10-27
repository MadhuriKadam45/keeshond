/* API Endpoints
 * breeds list: https://dog.ceo/api/breeds/list/all
 * get single breed image: https://dog.ceo/api/breed/keeshond/images/random
 */

// This function returns (breeds)
function getDogsBreed() {
  return fetch(`https://dog.ceo/api/breeds/list/all`)
    .then((res) => res.json())
    .then((data) => Object.keys(data.message))
    .catch((err) => console.log(err));
}

function renderOptions() {
  getDogsBreed().then((breeds) => {
    for (let breed of breeds) {
      console.log(breed);
    }
  });
}

renderOptions();

// .then works on promise
// our custom function is not a promise
// but our custom
