import "./style.css";
import homepage from "./homepage";
import { foodItems } from "./menu";
import pageTemplate, { contactInfo } from "./contact";

// Show tab options
(function () {
  const nav = document.createElement("nav");
  document.body.prepend(nav);
  const ul = document.createElement("ul");
  nav.appendChild(ul);

  const homepage = document.createElement("li");
  homepage.setAttribute("id", "home");
  ul.appendChild(homepage).textContent = "The Hungry Fork";
  const menu = document.createElement("li");
  menu.setAttribute("id", "menu");
  ul.appendChild(menu).textContent = "Menu";
  const contact = document.createElement("li");
  contact.setAttribute("id", "contact");
  ul.appendChild(contact).textContent = "Contact";
})();

homepage();

// Add event listeners to navigation elements
document.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", e => {
    deleteContents();
    if (e.target.id === "home") {
      console.log(e);
      return homepage();
    } else if (e.target.id === "menu") {
      return pageTemplate(foodItems);
    } else {
      return pageTemplate(contactInfo);
    }
  });
});

function deleteContents() {
  const content = document.getElementById("content");
  content.textContent = "";
}
