import "./style.css";
// import Icon from "./fork.jpg";
import initialLoad from "./homepage";

const displayTabs = (() => {
  const nav = document.createElement("nav");
  content.appendChild(nav);
  const homepage = document.createElement("a");
  nav.appendChild(homepage).textContent = "The Hungry Fork";
  const menu = document.createElement("a");
  nav.appendChild(menu).textContent = "Menu";
  const contact = document.createElement("a");
  nav.appendChild(contact).textContent = "Contact";
})();

initialLoad();
