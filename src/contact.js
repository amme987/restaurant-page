export class Contact {
  constructor(title, info) {
    this.title = title;
    this.info = info;
  }
}

const address = new Contact("Address", "1234 Fork Rd, Gainesville, GA 12345");
const phone = new Contact("Phone", "123-456-7890");
const email = new Contact("Email", "contact@thehungryfork.com");

export const contactInfo = [address, phone, email];

function pageTemplate(menus) {
  const content = document.getElementById("content");

  for (let item of menus) {
    content.appendChild(document.createElement("h3")).textContent = item.title;
    content.appendChild(document.createElement("p")).textContent = item.info;
    if (item !== menus[2]) {
      content.appendChild(document.createElement("hr"));
    }
  }
}

export default pageTemplate;
