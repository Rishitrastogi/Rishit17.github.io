const home = document.getElementById("home");
const about = document.getElementById("about");
const services = document.getElementById("services");
const contact = document.getElementById("contact");
const content = document.getElementById("content");

home.addEventListener("click", () => {
  content.innerHTML = "<h2>Welcome to my website!</h2><p>This is the home page.</p>";
});

about.addEventListener("click", () => {
  content.innerHTML = "<h2>About</h2><p>This is the about page.Here I will be adding details about my e-commerce or whatever type of website's details. Not yet decided </p>";
});

services.addEventListener("click", () => {
  content.innerHTML = "<h2>Services</h2><p>These are the services we offer. Here I will be adding my services or products that are goning to be sold on the website.</p>";
});

contact.addEventListener("click", () => {
  content.innerHTML = "<h2>Contact </h2><p>Get in touch with us.Here I will be adding our websites contacts and other details and address.</p>";
});
// Initial scroll.
$window.on('load', function() {
  $window.trigger('scroll');
});