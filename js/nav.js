// JavaScript code to render HTML
window.onload = function () {
  // HTML content to render
  var htmlContent = `
    <div class="container mx-auto p-0">
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <a class="btn btn-ghost text-xl">Alexie Tuzon</a>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    `;

  // Get the container element
  var navContaniner = document.getElementById("navContaniner");

  // Set the HTML content of the container
  navContaniner.innerHTML = htmlContent;
};
