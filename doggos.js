// const BREEDS_URL = 'https://dog.ceo/api/breeds/image/random';

// function addDoggo () {
//     //show loading spinner
//     fetch(BREEDS_URL)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function (data) {
//         const img = document.createElement('img');
//         img.src = data.message;
//         img.alt = 'Cute doggo';

//         document.querySelector('.doggos').appendChild(img);

//         // stop showing loading spinner
//     })
// }
    
// document.querySelector('.add-doggo').addEventListener("click", addDoggo);

const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breeds');

function breedPhoto (breed) {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    let dog = document.querySelector('.dog');
    dog.style.display = "block";
    document.querySelector('.doggos').innerHTML="";

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const img = document.createElement('img');
            img.src = data.message;
            img.alt = breed;
            img.addEventListener("load", function (event) {
                dog.style.display="none";    
            });
            document.querySelector('.doggos').appendChild(img);
        })
}

function initDropDown () {
fetch(BREEDS_URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);

        for (let i =0; i < breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option);
        }
    })
}

initDropDown();

select.addEventListener("change", function (event) {
    // console.log(event.target.value);
    // console.log(`https://dog.ceo/api/breed/${event.target.value}/images/random`)
    breedPhoto(event.target.value);
    // make url
    // show loading spinner
    // fetch from API
    // use the URL to change the current image
    // stop showing loading spinner
});

    