function generatePoem(event) {
  event.preventDefault();
  let poemElement = document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: "Generating poem...",
    autoStart: true,
    delay: 80,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");

poemFormElement.addEventListener("submit", generatePoem);
