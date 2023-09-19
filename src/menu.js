import { Contact as Menu } from "./contact";

const salad = new Menu(
  "Forkful of Flavor",
  "A hearty salad of mixed greens, grilled chicken, bacon, avocado, cherry tomatoes, hard-boiled eggs, blue cheese crumbles, and croutons, tossed with your choice of dressing."
);
const pasta = new Menu(
  "Fork Off Pasta",
  "A creamy alfredo sauce with garlic, parmesan cheese, and fresh parsley, tossed with fettuccine noodles and your choice of chicken or shrimp."
);
const pie = new Menu(
  "Fork Over the Pie",
  "A sweet and tangy apple pie with a flaky crust, served with a scoop of vanilla ice cream and caramel sauce."
);

export const foodItems = [salad, pasta, pie];
