// When a user selects a dish option (don’t worry about “Entire Meal”) and then clicks the “Let’s Cook!” button, the user sees a random dish from the list of possible dishes for that category

// [x] create random index helper function

// [] assign variables storing random index from each array

// store let's cook button with query Selector

// store output div with querySelector

// add eventListener to let's cook button

// add event handler that clears output divs html and injects a template literal with random dish from selected array using random index



// Helper Functions

function getRandomIndex(array) {
  return Math.floor(Math.random() * (array.length + 1))
}
