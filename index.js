const modeToggleBtn = document.getElementById("mode-toggle");
const body = document.body;
let lastScrollTop = 0; // Declare lastScrollTop outside of the event listener function

modeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var loading = document.getElementById("loading");

  if (scrollTop < lastScrollTop) {
    loading.style.display = "block";
    setTimeout(function () {
      loading.style.display = "none";
    }, 1000); // Adjust the delay time as needed
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
