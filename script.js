function displayGeneratedPoem(response) {
  console.log("Poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
    loop: false,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let poemHidden = document.querySelector("#poem");
  poemHidden.classList.remove("hidden");

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "0c98c0be68f4tba31fe26f898obb603d";
  let prompt = `User instructions are: Generate a poem about ${instructionsInput.value} without any remarks`;
  let context =
    "You are a romantic poem expert and love to write poems. Your mission is to generate a 4, 6 or 8 line poem. After every sentence start a new line below or ad <br/> in basic HTML format. Do not display HTML properties like <br/>. Do not display a title. Make sure to follow the user instructions. Sign the poem with ~ on a new line at the end.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayGeneratedPoem);

  console.log(`Generating poem about ${instructionsInput.value}...`);
  console.log(`Prompt: ${prompt}`);

  new Typewriter("#poem", {
    strings: "Generating poem...",
    autoStart: true,
    delay: 40,
    loop: true,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");

poemFormElement.addEventListener("submit", generatePoem);
