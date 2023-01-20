"use strict";
let imgField = document.querySelector("#generatedFox");
const button = document.querySelector("#button");
function getFox() {
    const url = "https://randomfox.ca/floof/?ref=apilist.fun";
    // @ts-ignore
    const p = fetch(url)
        .then(response => {
        //console.log(response.json());
        return response.json();
    }).then(data => {
        imgField.src = data.image;
    });
}
button.addEventListener('click', function (event) {
    event.preventDefault();
    imgField.src = 'loading.gif';
    getFox();
});