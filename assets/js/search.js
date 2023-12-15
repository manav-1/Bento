document.getElementById("search").addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    let search = document.getElementById("search").value;
    window.open("https://www.google.com/search?q=" + search);
  }
});
