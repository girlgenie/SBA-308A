const url =
  "https://youtube-search-results.p.rapidapi.com/youtube-search/?q=justin%2Bbieber";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b55e621a8bmshb379002c4bd8badp17c68djsn1f53bb5cc1a1",
    "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
