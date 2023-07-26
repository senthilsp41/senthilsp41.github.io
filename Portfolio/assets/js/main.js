movnav = document.querySelector(".mobnav");
movnav.onclick = function() {
    navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
}

//preloader

// Function to simulate an asynchronous task
function simulateAsyncTask() {
    return new Promise((resolve) => {
      setTimeout(resolve, 4000); // Simulate a 2-second delay
    });
  }
  
  // Show the preloader
  function showPreloader() {
    var preloader = document.getElementById("preloader");
    preloader.style.display = "flex";
  }
  
  // Hide the preloader
  function hidePreloader() {
    var preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  }
  
  // Execute the code after the page is fully loaded
  window.addEventListener("load", function () {
    // Perform your initial tasks here
    // ...
  
    // Simulate an asynchronous task that takes 2 seconds to complete
    showPreloader();
    simulateAsyncTask().then(() => {
      // After the task is done, hide the preloader and show your content
      hidePreloader();
    });
  });
  