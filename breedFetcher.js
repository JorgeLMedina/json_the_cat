const request = require("request");
// const catQuery = args.splice(2).join(" ");

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
      return;
    } else if (data.length === 0) {
      const msg = `Breed not found, please try again with a different one.`;
      callback(msg, null);
      return;
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };

/* request(`https://api.thecatapi.com/v1/breeds/search?q=${catQuery}`, (error, response, body) => {
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
}); */