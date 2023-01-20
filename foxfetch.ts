let imgField= document.querySelector("#generatedFox") as HTMLImageElement;
const button = document.querySelector("#button") as HTMLButtonElement;

function getFox():void {

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

button.addEventListener('click', function(event) {
    
    event.preventDefault();   
    imgField.src = 'loading.gif';
    getFox(); 
                
});

