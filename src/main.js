// Variables
let randomSidesIndex = getRandomIndex(sides);
let randomMainsIndex = getRandomIndex(mains);
let randomDessertsIndex = getRandomIndex(desserts);

// HTML Elements
let form = document.querySelector('.js-form');
let output = document.querySelector('.js-output-box');
let letsCookButton = document.querySelector('.js-lets-cook-button')

// Event Listeners
form.addEventListener('submit', displayRandomDish);

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
      }
    }
  }

  let recommendation = `
    <p class="recommendation">You should make: </p>
    <p class="random-dish">${randomDish}!</p>
    <button class="clear-button js-clear-button">Clear</button>
  `;
  output.innerHTML = recommendation;
  letsCookButton.classList.add('visited');
}

// Helper Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * (array.length + 1))
}


//
