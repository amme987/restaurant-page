import "./style.css";
import initialLoad from "./homepage";
import loadMenu from "./menu";

const displayTabs = (() => {
  const nav = document.createElement("nav");
  content.appendChild(nav);

  const ul = document.createElement("ul");
  nav.appendChild(ul);
  const homepage = document.createElement("li");
  ul.appendChild(homepage).textContent = "The Hungry Fork";
  const menu = document.createElement("li");
  ul.appendChild(menu).textContent = "Menu";
  const contact = document.createElement("li");
  ul.appendChild(contact).textContent = "Contact";

  // const homepage = document.createElement("a");
  // nav.appendChild(homepage).textContent = "The Hungry Fork";
  // const menu = document.createElement("a");
  // nav.appendChild(menu).textContent = "Menu";
  // menu.setAttribute("href", "");
  // const contact = document.createElement("a");
  // nav.appendChild(contact).textContent = "Contact";
})();

initialLoad();

// Event listeners to navigation elements
document.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", deleteContents);
});

function deleteContents() {
  document.body.textContent = "";
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "transparent";

  loadMenu();
}
