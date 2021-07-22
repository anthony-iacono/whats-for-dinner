// When a user selects a dish option (don’t worry about “Entire Meal”) and then clicks the “Let’s Cook!” button, the user sees a random dish from the list of possible dishes for that category

// [x] create random index helper function

// [x] assign variables storing random index from each array

// [x] store let's cook button with query Selector

// [x] store output div with querySelector

// [x] add eventListener to let's cook button

// [] add event handler that clears output divs html and injects a template literal with random dish from selected array using random index

// Variables

let randomSidesIndex = getRandomIndex(sides);
let randomMainsIndex = getRandomIndex(mains);
let randomDessertsIndex = getRandomIndex(desserts);

// HTML Elements

const letsCookButton = document.querySelector('.js-lets-cook-button');
const output = document.querySelector('.js-output-box');

// Event Listeners

letsCookButton.addEventListener('click', displayRandomDish);

// Event Handlers

function displayRandomDish() {
  output.innerHTML = '';
  dishType = letsCookButton.value;
  if (dishType === 'side') {
    output.innHTML = `
    <p>You should make:\n${sides[randomSidesIndex]}</p>
    `
  }
}

// Helper Functions

function getRandomIndex(array) {
  return Math.floor(Math.random() * (array.length + 1))
}
