/* API Endpoints
 * breeds list: https://dog.ceo/api/breeds/list/all
 * get single breed image: https://dog.ceo/api/breed/keeshond/images/random
 */

// DOM Selection
const selectE1 = document.querySelector("#dog-breeds");

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
      const option = document.createElement("option");
      option.textContent = breed[0].toUpperCase() + breed.slice(1);
      option.value = breed;
      selectE1.appendChild(option);
    }
  });
}

renderOptions();

// .then works on promise
// our custom function is not a promise
// but our custom
