// Variables
let randomSidesIndex = getRandomIndex(sides);
let randomMainsIndex = getRandomIndex(mains);
let randomDessertsIndex = getRandomIndex(desserts);

// HTML Elements
let form = document.querySelector('.js-form');
let output = document.querySelector('.js-output-box');
let cookpot = document.querySelector('.js-cookpot')
let letsCookButton = document.querySelector('.js-lets-cook-button')
let clearButton = document.querySelector('.js-clear-button')

// Event Listeners
form.addEventListener('submit', displayRandomDish);
clearButton.addEventListener('click', clearOutput);

// Event Handlers
function displayRandomDish(e) {
  e.preventDefault();

  let radioButtons = document.getElementsByName('dishType');
  let randomDish;

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      if (radioButtons[i].value === 'side') {
        randomDish = sides[randomSidesIndex];
        break;
      } else if (radioButtons[i].value === 'main') {
        randomDish = mains[randomMainsIndex];
        break;
      } else if (radioButtons[i].value === 'dessert') {
        randomDish = desserts[randomDessertsIndex];
        break;
      } else if (radioButtons[i].value === 'meal') {
        randomDish = `${mains[randomMainsIndex]} with a side of ${sides[randomSidesIndex]} and ${desserts[randomDessertsIndex]} for dessert`
        break;
      }
    }
  }

  let recommendation = `
    <p class="recommendation">You should make: <span class="random-dish">${randomDish}!</span></p>
  `;

  let currentRecommendation = document.querySelector('.recommendation');
  if (currentRecommendation) {
    currentRecommendation.remove();
  }

  output.insertAdjacentHTML('afterbegin', recommendation);
  cookpot.classList.add('hidden')
  clearButton.classList.remove('hidden');
}

function clearOutput() {
  let currentRecommendation = document.querySelector('.recommendation');
  currentRecommendation.remove();
  cookpot.classList.remove('hidden');
  clearButton.classList.add('hidden');
}

// Helper Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}


// user selects entire meal
// user clicks let's cook button
// click event listener fires off handler
// clear output box
// add html string interpolating random main, side, and desserts
