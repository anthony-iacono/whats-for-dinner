// HTML Elements
const form = document.querySelector('.js-form');
const output = document.querySelector('.js-output-box');
const cookpot = document.querySelector('.js-cookpot');
const letsCookButton = document.querySelector('.js-lets-cook-button');
const clearButton = document.querySelector('.js-clear-button');

// Variables
let randomSidesIndex = getRandomIndex(sides);
let randomMainsIndex = getRandomIndex(mains);
let randomDessertsIndex = getRandomIndex(desserts);
let randomDish;

// Event Listeners
form.addEventListener('submit', displayRandomDish);
clearButton.addEventListener('click', clearOutput);

// Event Handlers
function displayRandomDish(e) {
  e.preventDefault();
  let radioButtons = document.getElementsByName('dishType');
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
        randomDish = `${mains[randomMainsIndex]} with a side of ${sides[randomSidesIndex]} and ${desserts[randomDessertsIndex]} for dessert`;
        break;
      }
    }
  }

  displayRecommendation()
}

function clearOutput() {
  currentRecommendation = document.querySelector('.recommendation');
  currentRecommendation.remove();
  cookpot.classList.remove('hidden');
  clearButton.classList.add('hidden');
}

// Helper Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function displayRecommendation() {
  let currentRecommendation = document.querySelector('.js-recommendation');
  if (currentRecommendation) {
    currentRecommendation.remove();
  }

  let newRecommendation = `
    <p class="recommendation js-recommendation">You should make: <span class="random-dish">${randomDish}!</span></p>
  `;
  output.insertAdjacentHTML('afterbegin', newRecommendation);
  cookpot.classList.add('hidden')
  clearButton.classList.remove('hidden');
}
