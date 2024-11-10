/* API Endpoints
 * breeds list: https://dog.ceo/api/breeds/list/all
 * get single breed image: https://dog.ceo/api/breed/{breed}/images/random
 */

// DOM Selection
const selectE1 = document.querySelector("#dog-breeds");
const imageE1 = document.querySelector("#dog-image");

// === Fetch
// This function returns (breeds)
async function getDogsBreed() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/list/all`);
    const data = await res.json();
    return Object.keys(data.message);
  } catch (err) {
    return console.log(err);
  }
}

async function getDogImage(breed) {
  try {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const data = await res.json();
    return data.message;
  } catch (err) {
    return console.log(err);
  }
}

getDogImage("keeshond");

// === Render
// Render the <option>
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

selectE1.addEventListener("change", (e) => {
  const selectedValue = e.target.value;

  getDogImage(selectedValue).then((link) => (imageE1.src = link));
});

// .then works on promise
// our custom function is not a promise
// but our custom
