const request = require("request");
const args = process.argv;
const catQuery = args.splice(2).join(" ");

request(`https://api.thecatapi.com/v1/breeds/search?q=${catQuery}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log("error:", error.message);
    return;
  } else if (data.length === 0) {
    console.log("Breed not found, please try again.");
    return;
  } else {
    console.log(data[0].description);
  }
});