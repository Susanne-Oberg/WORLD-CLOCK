setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  let helsinkiElement = document.querySelector("#helsinki");
  let helsinkiDateElement = helsinkiElement.querySelector(".date");
  let helsinkiTimeElement = helsinkiElement.querySelector(".time");
  let helsinkiTime = moment().tz("Europe/Helsinki");
  helsinkiDateElement.innerHTML = helsinkiTime.format("MMMM Do YYYY");
  helsinkiTimeElement.innerHTML = helsinkiTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);
