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

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "0c98c0be68f4tba31fe26f898obb603d";
  let prompt = `User instructions are: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert and love to write medium long poems. Your mission is to generate an 6 line poem (in basic HTML format), without displaying a title. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayGeneratedPoem);

  console.log("Generating poem...");
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
