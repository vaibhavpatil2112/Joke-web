const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

// Using .then()
generateJoke();

function generateJoke() {
  fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => (joke.innerHTML = data.joke));
}

// Using Async await

// async function generateJoke() {
//   const dadJoke = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   const res = await fetch("https://icanhazdadjoke.com", dadJoke);

//   const data = await res.json();
//   joke.innerHTML = data.joke;
// }
