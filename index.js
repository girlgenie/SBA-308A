const userInput = document.getElementById('searchbox'); 
const button = document.getElementById('search-button'); 
button.addEventListener("click", ()=> { 
  // user input
  console.log(userInput.value)

  // 

  // button
  console.log(button)
})

// delete code for button below if button above works
// const button2 = document.createElement("button"); 
// button2.textContent= "Title"
// document.body.appendChild(button2);
//  button2.addEventListener("click", (onclick) => {
//   console.log("button clicked")
// }).
// delete code for button above if button above works 

// const url =
//   "https://youtube-search-results.p.rapidapi.com/youtube-search/?q=justin%2Bbieber";
//   const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "b55e621a8bmshb379002c4bd8badp17c68djsn1f53bb5cc1a1",
//     "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
//   },
// };
// async function fetchData (){
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json(response);
//     console.log(result);
//   } catch (error) {
//     console.error(error);
// }
// }

// fetchData (); 