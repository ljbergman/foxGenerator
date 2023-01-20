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
        playAudio();
    });
}
button.addEventListener('click', function (event) {
    event.preventDefault();
    imgField.src = 'loading.gif';
    getFox();
});
// Forest sounds
var audioSound = new Audio('forest.mp3');
var audioSound2 = new Audio('babyfox.mp3');
function playAudio() {
    audioSound.pause();
    audioSound.play();
    audioSound2.volume = 0.1;
    audioSound2.pause();
    audioSound2.play();
}
