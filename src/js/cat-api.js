import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_HQWb3FccoBZZqeCsYuLJjf1gUCIGu1XECIdInolgn4hBjZIhXV2MY0jsFosgi1aR";
const BASE_URL = 'https://api.thecatapi.com/v1'

export function fetchBreeds() {
    return axios.get(`${BASE_URL}/breeds`)
        .then(response => response.data)
        };


export function fetchCatByBreed(breedId) {
    return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
        .then(response => response.data[0])
        };





