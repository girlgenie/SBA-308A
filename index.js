const userInput = document.getElementById('searchbox'); 
const button = document.getElementById('search-button'); 
button.addEventListener("click", ()=> { 
  // user input
  console.log(userInput.value)
  userInput.value = ''; 

  // 

  // button
  console.log(button)
})

//  YOUTUBE VIDEO HELP: https://www.youtube.com/watch?v=QegE9i4UW4I&t=401s&ab_channel=WinDev 
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