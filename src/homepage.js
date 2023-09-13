import Food from "./homepage.jpg";

const initialLoad = () => {
  const h1 = document.createElement("h1");
  document.body.appendChild(h1).textContent = "The Hungry Fork";

  const aside = document.createElement("aside");
  document.body.appendChild(aside).textContent = "Fast, fresh, and forkable";

  const div = document.createElement("div");
  document.body.appendChild(div).setAttribute("class", "homepage");

  const img = new Image();
  img.src = Food;
  div.appendChild(img);

  const p = document.createElement("p");
  div.appendChild(p).textContent =
    "The Hungry Fork is a convenient and affordable restaurant that offers a variety of dishes that can be eaten with a fork. Whether you want a salad, a pasta, a stir-fry, or a pie, you will find it at The Hungry Fork. Our food is made with fresh and quality ingredients and prepared in minutes. No matter how busy you are, you can always grab a delicious and satisfying meal at The Hungry Fork.";
};
export default initialLoad;
