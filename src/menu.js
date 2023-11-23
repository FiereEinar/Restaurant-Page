import "../src/menu.css";

import Item0 from "../src/images/sample-food.jpg";
import Item1 from "../src/images/sample-food-1.jpg";
import Item2 from "../src/images/sample-food-2.jpg";
import Item3 from "../src/images/sample-food-3.jpg";

const description0 = "Ut faucibus id eros ut sodales. Sed egestas consectetur pretium. Maecenas cursus quis mauris eget finibus. Aliquam vitae faucibus dui, sed venenatis velit. Vestibulum condimentum aliquam nunc sed dignissim..";
const description1 = "Vestibulum et hendrerit libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ullamcorper justo facilisis varius dignissim. Vivamus tincidunt scelerisque sapien. Maecenas mattis auctor magna.";
const description2 = "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus ac libero nec massa vulputate fringilla ut quis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const description3 = "Mauris sed nunc turpis. Integer tempus, nunc eu efficitur aliquam, nisl lacus dapibus lorem, eu volutpat mauris turpis sit amet libero. Donec non ligula in sem posuere porta. Aenean non erat lectus.";

const items = [];

class Food {
    constructor(name, price, description, picture) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.picture = picture;
    }
}

const food0 = new Image();
food0.src = Item0;
const food1 = new Image();
food1.src = Item1;
const food2 = new Image();
food2.src = Item2;
const food3 = new Image();
food3.src = Item3;

const item0 = new Food("Fried Chicken", "$15", description0, food0);
items.push(item0);
const item1 = new Food("Curry Rice", "$10", description1, food1);
items.push(item1);
const item2 = new Food("Lugaw", "$8", description2, food2);
items.push(item2);
const item3 = new Food("Hand Flavored Soup", "$12", description3, food3);
items.push(item3);

export class Menu{
    constructor(parent) {
        this.parent = parent;
        this.menuContainer;
    }
    render() {
        this.foodContainer();
        this.menuCard();
    }
    foodContainer() {
        this.menuContainer = document.createElement("div");
        this.menuContainer.className = "menuContainer";
        this.parent.appendChild(this.menuContainer);
    }
    menuCard() {
        for (let i = 0; i < items.length; i++) {
            const card = document.createElement("div");
            card.className = "foodCard";
            this.menuContainer.appendChild(card);

            //image
            const foodImg = items[i].picture;
            foodImg.className = "foodImg";
            card.appendChild(foodImg);

            //details
            const foodDetailsCon = document.createElement("div");
            foodDetailsCon.className = "foodDetails";
            card.appendChild(foodDetailsCon);

            const foodName = document.createElement("h2");
            foodName.innerHTML = items[i].name;
            foodDetailsCon.appendChild(foodName);

            const foodPrice = document.createElement("p");
            foodPrice.innerHTML = items[i].price;
            foodDetailsCon.appendChild(foodPrice);

            const foodDescription = document.createElement("p");
            foodDescription.innerHTML = items[i].description;
            foodDetailsCon.appendChild(foodDescription);

            const order = document.createElement("button");
            order.innerHTML = "ORDER";
            foodDetailsCon.appendChild(order);
        }
    }
}