const menu = () => {
  const content = document.getElementById("content");
  const main = document.createElement("main");
  content.appendChild(main);

  const salad = document.createElement("h3");
  main.appendChild(salad).textContent = "Forkful of Flavor";
  const saladInfo = document.createElement("p");
  main.appendChild(saladInfo).textContent =
    "A hearty salad of mixed greens, grilled chicken, bacon, avocado, cherry tomatoes, hard-boiled eggs, blue cheese crumbles, and croutons, tossed with your choice of dressing.";
  main.appendChild(document.createElement("hr"));

  main.appendChild(document.createElement("h3")).textContent = "Fork Off Pasta";
  main.appendChild(document.createElement("p")).textContent =
    " A creamy alfredo sauce with garlic, parmesan cheese, and fresh parsley, tossed with fettuccine noodles and your choice of chicken or shrimp.";
  main.appendChild(document.createElement("hr"));

  const pie = document.createElement("h3");
  main.appendChild(pie).textContent = "Fork Over the Pie";
  main.appendChild(document.createElement("p")).textContent =
    "A sweet and tangy apple pie with a flaky crust, served with a scoop of vanilla ice cream and caramel sauce.";
};

export default menu;
