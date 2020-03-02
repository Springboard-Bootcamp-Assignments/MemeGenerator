// Selectors
const url = document.querySelector("#url");
const topTextInput = document.querySelector("#top-text");
const botttomTextInput = document.querySelector("#bottom-text");
const btn = document.querySelector("input[type='submit']");
const output = document.querySelector("#output");

// Event listeners

btn.addEventListener("click", e => {
  e.preventDefault();
  if (url.value === "") return;
  const newMeme = createMeme();
  output.appendChild(newMeme);
  clearInputs();
});

output.addEventListener("click", e => {
  deleteMeme(e);
});

// Functions
function createMeme() {
  // Container for meme
  const meme = document.createElement("div");
  meme.className = "meme";

  const box = document.createElement("div");
  box.className = "box";

  // Meme content
  const picture = document.createElement("img");
  picture.src = url.value;

  const topText = document.createElement("h2");
  topText.className = "top";
  topText.innerHTML = topTextInput.value;

  const bottomText = document.createElement("h2");
  bottomText.className = "bottom";
  bottomText.innerText = botttomTextInput.value;

  box.append(picture, topText, bottomText);
  meme.append(box);

  return meme;
}

function clearInputs() {
  url.value = "";
  topTextInput.value = "";
  botttomTextInput.value = "";
}

function deleteMeme(e) {
  console.dir(e.target);
  if (e.target.tagName === "IMG" || e.target.tagName === "H2") {
    if (confirm("Do you want to delete?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}
