console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", () => {
    //fetch image json, create new image element, create img for each location
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => data.message.forEach(pic => {
        const picArea = document.querySelector("#dog-image-container");
        const picture = document.createElement("img");
        picture.src = pic;
        picArea.appendChild(picture);         
    }))
    
    //fetch breed json, create li with each breed
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        for (const dog in data.message){
            const dogBreeds = document.querySelector("#dog-breeds");
            const newDog = document.createElement("li");
            newDog.innerText= dog;
            newDog.addEventListener("click", e => e.target.style.color = "red")
            dogBreeds.appendChild(newDog);
        }
    })
    

    //grab breed dropdown, have it filter li elements
    const dropDown = document.querySelector("#breed-dropdown");
    dropDown.addEventListener("change", (e) => {
        const filterLetter = e.target.value;
        const breedArray = document.querySelectorAll("li");
        for (const breed of breedArray){
            breed.hidden = false;
            if (breed.textContent[0] != filterLetter){
                breed.hidden = true;
            }
        }
    })
})