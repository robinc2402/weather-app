const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  const errDiv = document.querySelector("#error");
  const resDiv = document.querySelector("#forecast");

  resDiv.innerHTML = "Loading...";

  fetch("/weather?address=" + location).then(
    (res) => {
      resDiv.innerHTML = errDiv.innerHTML = "";
      res.json().then((data) => {
        if (data.error) {
          errDiv.innerHTML = data.error;
        } else {
          resDiv.innerHTML = data.location + ":<br>" + data.forecast;
        }
      });
    }
  );
});
