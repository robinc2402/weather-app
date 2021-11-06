const request = require("postman-request");

const forecast = (lon, lat, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=cf5149980c3a703608488f172b49dab1&query=" +
    lon +
    "," +
    lat;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees. It feels like " +
          body.current.feelslike +
          " degrees out. There is a " +
          body.current.precip +
          "% chance of rain."
      );
    }
  });
};
module.exports = forecast;
