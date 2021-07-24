// When a user selects a dish option (don’t worry about “Entire Meal”) and then clicks the “Let’s Cook!” button, the user sees a random dish from the list of possible dishes for that category

// [x] create random index helper function

// [x] assign variables storing random index from each array

// [x] store let's cook button with query Selector

// [x] store output div with querySelector

// [x] add eventListener to let's cook button

// [x] add event handler that clears output divs html and injects a template literal with random dish from selected array using random index

// Variables
let randomSidesIndex = getRandomIndex(sides);
let randomMainsIndex = getRandomIndex(mains);
let randomDessertsIndex = getRandomIndex(desserts);

// HTML Elements
let form = document.querySelector('form');
let output = document.querySelector('.js-output-box');

// Event Listeners
form.addEventListener('submit', displayRandomDish);

// Event Handlers
function displayRandomDish(e) {
  e.preventDefault();

  let radioButtons = document.getElementsByName('dishType');
  let recommendation;

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      if (radioButtons[i].value === 'side') {
        recommendation = `<p>You should make:\n${sides[randomSidesIndex]}</p>`;
        break;
      } else if (radioButtons[i].value === 'main') {
        recommendation = `<p>You should make:\n${mains[randomMainsIndex]}</p>`;
        break;
      } else if (radioButtons[i].value === 'dessert') {
        recommendation = `<p>You should make:\n${desserts[randomDessertsIndex]}</p>`;
        break;
      }
    }
  }

  output.innerHTML = recommendation;
}

// Helper Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * (array.length + 1))
}
