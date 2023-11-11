import "../src/staff.css";
import Chef from "../src/images/chef.jpg";
import Owner from "../src/images/owner.jpg";
import Waiter1 from "../src/images/waiter-1.jpg";
import Waiter2 from "../src/images/waiter-2.jpg";

const people = [];

class Worker {
    constructor(name, role, contact, address, profile) {
        this.name = name;
        this.role = role;
        this.contact = contact;
        this.address = address;
        this.profile = profile;
    }
}

const chefImg = new Image();
chefImg.src = Chef;
const ownerImg = new Image();
ownerImg.src = Owner;
const waiter1Img = new Image();
waiter1Img.src = Waiter1;
const waiter2Img = new Image();
waiter2Img.src = Waiter2;

const owner = new Worker("Banjeet Ali", "Owner", "09694206901", "New York, India", chefImg);
people.push(owner);
const chef = new Worker("El Gato", "Chef", "09451206391", "Manila, Pluto", ownerImg);
people.push(chef);
const waiter1 = new Worker("Jose Momo", "Waiter", "09924206531", "Sahara, Pacific", waiter1Img);
people.push(waiter1);
const waiter2 = new Worker("Mekus Mekus", "Waiter", "09891106001", "Calocohan, Icija", waiter2Img);
people.push(waiter2);

export class Staff {
    constructor(parent) {
        this.parent = parent;
        this.staffContainer;
    }
    render() {
        this.container();
        this.cards();
    }
    container() {
        this.staffContainer = document.createElement("div");
        this.staffContainer.className = "staffContainer";
        this.parent.appendChild(this.staffContainer);
    }
    cards() {
        for (let i = 0; i <= people.length-1; i++) {
            const container = document.createElement("div");
            container.className = "workerContainer";
            this.staffContainer.appendChild(container);

            const img = people[i].profile;
            container.appendChild(img);

            const name = document.createElement("h2");
            name.innerHTML = people[i].name;
            container.appendChild(name);

            const role = document.createElement("p");
            role.innerHTML = people[i].role;
            container.appendChild(role);

            const contact = document.createElement("p");
            contact.innerHTML = people[i].contact;
            container.appendChild(contact);

            const address = document.createElement("p");
            address.innerHTML = people[i].address;
            container.appendChild(address);
        }
    }
}