function handleSearchSubmit(event) {
  event.preventDefault();
}

let searchFormBox = document.querySelector("#search-form");
searchFormBox.addEventListener("submit", handleSearchSubmit);
