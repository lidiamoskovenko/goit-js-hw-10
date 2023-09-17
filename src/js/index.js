import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import Notiflix from "notiflix";

const breedSelect = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");
const loader = document.querySelector(".loader");
const body = document.querySelector('body');

console.log();

loader.hidden = true;
breedSelect.hidden = true;

function searchBreeds() {

  fetchBreeds()
    .then((breeds) => {
      breedSelect.hidden = false;

        breedSelect.innerHTML = breeds
        .map((breed) => `<option value="${breed.id}">"${breed.name}"</option>`)
        .join("");})        
    .catch(ifError)
}
searchBreeds();

breedSelect.addEventListener('change', createCatsCard)

function createCatsCard(e){
e.preventDefault();
loader.hidden = false;
let breedId = e.target.value;

if(!loader.hidden){
  catInfo.style.display = "none";
  body.style.backgroundColor = "grey"}

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
     .catch(ifError,breedSelect.hidden = false)
     };

     function ifError(){
      loader.hidden = true;
      body.style.backgroundColor = "white";
      Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');

     } 

