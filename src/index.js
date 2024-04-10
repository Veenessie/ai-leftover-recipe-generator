function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: `  <h2>Easy kedgeree</h2>
        <h3>Ingredients</h3>
        <ul>
          <li>2 tbsp curry powder of your choice (we used madras)</li>
          <li>300g basmati rice</li>
          <li>600ml chicken stock</li>
          <li>400g skinless smoked haddock</li>
          <li>100g frozen peas</li>
        </ul>
        <h3>Method</h3>
        <ul>
          <li>
            Heat the oven to 180C/160C fan/gas 4. Heat an ovenproof saucepan or
            flameproof casserole over a medium heat and toast the curry powder
            for 1 min. Stir in the rice to coat it in the curry powder, then
            pour over the stock. Bring to the boil, then lay the haddock on top.
            Cover. Cook in the oven for 30 mins.
          </li>
          <li>
            Carefully remove from the oven. Leave to rest for a minute, then
            stir through the peas while breaking up the haddock and fluffing the
            rice. Season to taste, then serve.
          </li>
        </ul>`,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let formElement = document.querySelector("#recipe-form");
formElement.addEventListener("submit", generateRecipe);
