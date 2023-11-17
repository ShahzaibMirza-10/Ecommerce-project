/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// _________ham-burger________

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}



//  Search-bar

// select the search button and search input
const searchButton = document.querySelector("#search-btn");
const searchInput = document.querySelector("#search");

// add a click event listener to the search button
searchButton.addEventListener("click", function (event) {
  // event.preventDefault(); // prevent the form from submitting

  const searchTerm = searchInput.value.trim(); // get the trimmed value of the search input

  // check if the search input is not empty
  if (searchTerm !== "") {
    // perform some action with the search term (e.g. send it to a server, display search results on the page, etc.)

    // console.log(`Searching for "${searchTerm}"...`);

    let inputVal = search.value;
    let pro = document.getElementsByClassName("pro");
    Array.from(pro).forEach(function (element) {
      let cardTxt = element.getElementsByTagName("span")[0].innerText;

      if (cardTxt.includes(inputVal)) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
      console.log(cardTxt);
    });
  }
});

// add a keypress event listener to the search input
searchInput.addEventListener("keypress", function (event) {
  // check if the enter key was pressed
  if (event.keyCode === 13) {
    event.preventDefault(); // prevent the form from submitting

    const searchTerm = searchInput.value.trim(); // get the trimmed value of the search input

    // check if the search input is not empty
    if (searchTerm !== "") {
      // perform some action with the search term (e.g. send it to a server, display search results on the page, etc.)
      // console.log(`Searching for "${searchTerm}"...`);

      let inputVal = search.value;
      let pro = document.getElementsByClassName("pro");
      Array.from(pro).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("span")[0].innerText;

        if (cardTxt.includes(inputVal)) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
        console.log(cardTxt);
      });
    }
  }
});
