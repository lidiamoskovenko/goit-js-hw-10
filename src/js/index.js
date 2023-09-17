import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import Notiflix from "notiflix";

const breedSelect = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");
const loader = document.querySelector(".loader");
const body = document.querySelector('body');
loader.hidden = true;
breedSelect.hidden = false;

breedSelect.addEventListener('change', createCatsCard)

function searchBreeds() {
  fetchBreeds()
    .then((breeds) => {
        breedSelect.innerHTML = breeds
        .map((breed) => `<option value="${breed.id}">"${breed.name}"</option>`)
        .join("");})        
    .catch(ifError)
}

searchBreeds();

function createCatsCard(e){
e.preventDefault();
loader.hidden = false;
breedSelect.hidden = true;

let breedId = e.target.value;
if(!loader.hidden){
  catInfo.style.display = "none";
  body.style.backgroundColor = "grey";

}
    fetchCatByBreed(breedId)
     .then(cat => {
        catInfo.innerHTML = `
          <img src="${cat.url}" alt="Cat" >
          <div class="wrapper">
          <h2><span>Name:</span>"${cat.breeds[0].name}"</h2>
          <p><span>Description:</span>"${cat.breeds[0].description}"</p>
          <p><span>Temperament:</span> "${cat.breeds[0].temperament}"</p></div>
        `;
        loader.hidden = true;
        body.style.backgroundColor = "white";
        catInfo.style.display = "flex";
        breedSelect.hidden = false;
        })
      .catch(ifError)};

     function ifError(){
      loader.hidden = true;
      breedSelect.hidden = true;
      Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
     } 

