function showRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user-instructions");

  let apiKey = `7b12a4c8c3fba7979089o3b3ff6teab1`;
  let prompt = `Generate a recipe using these leftovers - ${userInstructions.value}`;
  let context = `You're a helpful AI assistant who helps create recipes for people with their leftovers. Please keep recipes to less than 7 ingredients and 30mins or under cooking time. Please return your answer in html format.`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = "⏳ Generating Recipe....";

  axios.get(apiURL).then(showRecipe);
}

let formElement = document.querySelector("#recipe-form");
formElement.addEventListener("submit", generateRecipe);
