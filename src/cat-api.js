import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_HQWb3FccoBZZqeCsYuLJjf1gUCIGu1XECIdInolgn4hBjZIhXV2MY0jsFosgi1aR";

export function fetchBreeds() {
    return axios.get("https://api.thecatapi.com/v1/breeds")
        .then(response => response.data)
        .catch(error => {
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
            throw error;
        });
}

export function fetchCatByBreed(breedId) {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(response => response.data[0])
        .catch(error => {
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
            throw error;
        });
}

export default {fetchBreeds, fetchCatByBreed};



